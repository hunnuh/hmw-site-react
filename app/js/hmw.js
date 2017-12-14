document.addEventListener('DOMContentLoaded', function() { // wait for document ready




const slides = document.querySelectorAll("div.panel");

for (let i=0; i<slides.length; i++) {
	window.addEventListener('scroll', function(){
		let windowsize = window.innerHeight,
			windowpos = window.pageYOffset,
			buffer = 600, //dist between slides
			factor = (((windowsize+buffer)*(i+1))-windowpos); //number that gets smaller as you scroll
		slides[i].style.top =  factor <= 0 ? 0 + "px" : factor + "px";
	});
};

	//testing
	 /*setInterval(function(){
		console.log("Offset: "
		+ window.pageYOffset
		+ " WindowHeight:"
		+ window.innerHeight
		+ " (+"+600+"=) "
		+ (window.innerHeight+400)
		+ " TOP: "
		+ document.getElementById("ccc").getBoundingClientRect().top);
	}, 500);
*/

});
