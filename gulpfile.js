var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var watchify = require('watchify');
var exorcist = require('exorcist');
var browserify = require('browserify');
//var uglifyify = require('uglifyify');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var pump = require('pump');
var disc = require('disc')
var fs = require('fs')
// Watchify args contains necessary cache options to achieve fast incremental bundles.
// Adding debug true for source-map generation.
watchify.args.debug = true;


// Input file.
var bundler = watchify(browserify('./app/js/app.js', watchify.args));


//////////////////////transforms//////////////////////////////

bundler.transform(
    babelify.configure({
        sourceMapRelative: 'app/js',
        presets: ["env", "react"]
    })
);

bundler.transform('uglifyify', { global: true  })

////////////////// On updates recompile///////////////////////////
bundler.on('update', bundle);

function bundle() {
    gutil.log('Compiling JS...');
    var output = __dirname + '/disc.html'
    return bundler
        .bundle()
        .on('error', function(err) {
            gutil.log(err.message);
            browserSync.notify('Browserify Error!');
            this.emit('end');
        })
        .pipe(exorcist('app/js/dist/bundle.js.map'))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./app/js/dist'))
        .pipe(browserSync.stream({ once: true }));
}


gulp.task('apply-prod-environment', function() {
    process.stdout.write("Setting NODE_ENV to 'production'" + "\n");
    process.env.NODE_ENV = 'production';
    if (process.env.NODE_ENV != 'production') {
        throw new Error("Failed to set NODE_ENV to production!!!!");
    } else {
        process.stdout.write("Successfully set NODE_ENV to production" + "\n");
    }
});

/**
 * Gulp task alias
 */
gulp.task('bundle', function() {
    return bundle();
});

/**
 * First bundle, then serve from the ./app directory
 */
 //gulp.task('default', ['bundle'], function() {
gulp.task('default', ['apply-prod-environment', 'bundle'], function() {
    browserSync.init({
        server: './app'
    });
	gulp.watch("app/js/*.js", ['watch-reload'])
	gulp.watch("app/css/*.css", ['watch-reload'])
	gulp.watch("app/img/*.svg", ['watch-reload'])
	gulp.watch("app/img/*.png", ['watch-reload'])
	gulp.watch("app/img/*.jpg", ['watch-reload'])
	gulp.watch("app/img/*.jpeg", ['watch-reload'])
	gulp.watch("app/*.html", ['watch-reload'])
});

gulp.task('watch-reload', ['bundle'], function (done) {
    browserSync.reload();
    done();
});
