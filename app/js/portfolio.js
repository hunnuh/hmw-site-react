import React from 'react';
import ImageViewer from './ImageViewer.js'
import { Link } from "react-router-dom";

const images = [
  [ //csun
    {
      src: "img/portfolio/csun/celebrating.jpg",
      title: "Celebrating Poster",
      desc: "Part of an MIC Poster Series",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/certificate.jpg",
      title: "Commending Certificate",
      desc: "",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/connecting.jpg",
      title: "Connecting Poster",
      desc: "Part of an MIC Poster Series",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/dontforget.jpg",
      title: "Graduation Poster",
      desc: "Don't Forget!",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/door.jpg",
      title: "OSID Window Art",
      desc: "Window Art installed at CSUN",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/dos.png",
      title: "Day of Service Poster",
      desc: "Leave Your Mark",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/feathers.jpg",
      title: "Feather Banners",
      desc: "Created for Large Campus Ceremonies",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/frecon.jpg",
      title: "Convocation Postcard",
      desc: "Created for Freshman Convocation",
      date: "2016"
    },

    {
      src: "img/portfolio/csun/gradfest2.png",
      title: "GradFest Postcard",
      desc: "Save the Date!",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/handbook.jpg",
      title: "Handbook Cover",
      desc: "Illustration of the Oviatt Library",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/handbook2.jpg",
      title: "Handbook Cover 2",
      desc: "Illustration of a Matador & Cape",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/matatude.jpg",
      title: "Matatude Tuesdays Poster",
      desc: "Wear shirt (which I also designed), recieve discount.",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/mataventure.jpg",
      title: "Matty Matador Cartoon",
      desc: "Created for Mataventure video",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/me.jpg",
      title: "Me with Large Poster",
      desc: "I hope Jon Ronson liked it!",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/mic.jpg",
      title: "MIC Cape Poster",
      desc: "Part of an MIC Poster Series",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/shirtcontest.png",
      title: "Shirt Design Contest",
      desc: "",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/tshirt.jpg",
      title: "T-Shirt Contest Winner",
      desc: "This design won me $100",
      date: "2016"
    },
    {
      src: "img/portfolio/csun/uws.jpg",
      title: "Unified We Serve Logos",
      desc: "Logo choices for new UWS logo",
      date: "2016"
    },
  ],
  [ //nms
    {
      src: "img/portfolio/nms/nabblast.jpg",
      title: "Product Lineup",
      desc: "For using in mass email campaigns",
      date: "2017"
    },
    {
      src: "img/portfolio/nms/screens.jpg",
      title: "Website Show-Off",
      desc: "This was used in a mass email to show off the new website I had just designed.",
      date: "2017"
    },
    {
      src: "img/portfolio/nms/booth.jpg",
      title: "NAB Booth Mockup",
      desc: "It ended up looking just like this.",
      date: "2017"
    },
    {
      src: "img/portfolio/nms/collateral.jpg",
      title: "NAB Collateral Spread",
      desc: "",
      date: "2017"
    },
    {
      src: "img/portfolio/nms/connect.jpg",
      title: "Legacy Connect Concept",
      desc: "",
      date: "2017"
    },
    {
      src: "img/portfolio/nms/cutsheetfront.jpg",
      title: "Control Cutsheet (Front)",
      desc: "",
      date: "2017"
    },
    {
      src: "img/portfolio/nms/foldback.jpg",
      title: "Folding Handout (Back)",
      desc: "",
      date: "2017"
    },
    {
      src: "img/portfolio/nms/kiki.jpg",
      title: "Lower Third",
      desc: "Used in NewsCaster demonstration show",
      date: "2017"
    },
    {
      src: "img/portfolio/nms/macroguide.jpg",
      title: "Macro Handbook Cover",
      desc: "",
      date: "2017"
    },
    {
      src: "img/portfolio/nms/splashes.jpg",
      title: "Splash Screens",
      desc: "Used for Newsmaker Automation System Applications",
      date: "2017"
    },
  ],
  [ //acasola
    {
      src: "img/portfolio/acasola/nssposter.jpg",
      title: "No Snow Show Poster",
      desc: "Our Holiday Concert",
      date: "2014"
    },
    {
      src: "img/portfolio/acasola/auditions.jpg",
      title: "Auditions Flyer",
      desc: "This flyer helped us get a great turn-out!",
      date: "2014"
    },
    {
      src: "img/portfolio/acasola/tshirts.jpg",
      title: "T-Shirt Concepts",
      desc: "",
      date: "2013"
    },
    {
      src: "img/portfolio/acasola/certificate.jpg",
      title: "Gift Certificate",
      desc: "Good for one performance from Acasola",
      date: "2014"
    },
    {
      src: "img/portfolio/acasola/pizzarev.jpg",
      title: "Fundraiser Flyer",
      desc: "For a fundraiser at PizzaRev",
      date: "2013"
    },
    {
      src: "img/portfolio/acasola/nssposter2.jpg",
      title: "No Snow Show Poster",
      desc: "Our Holiday Concert",
      date: "2013"
    },
    {
      src: "img/portfolio/acasola/auditions2.jpg",
      title: "Audition Flyer",
      desc: "",
      date: "2012"
    },
    {
      src: "img/portfolio/acasola/nssflyer.jpg",
      title: "No Snow Show Flyer",
      desc: "Published officially all around CSUN.",
      date: "2014"
    },
    {
      src: "img/portfolio/acasola/laff.jpg",
      title: "First Place at LAFF",
      desc: "Photograph I took of the group's winning set at LAAF",
      date: "2016"
    },
    {
      src: "img/portfolio/acasola/tshirts2.jpg",
      title: "Tour T-Shirts",
      desc: "T-Shirt Design printed to go on tour with.",
      date: "2015"
    },
  ],
  [ //other
    {
      src: "img/portfolio/other/cotton.jpg",
      title: "Cotton Illustration",
      desc: "Made for a project about slavery",
      date: "2008"
    },
    {
      src: "img/portfolio/other/osc.jpg",
      title: "One Step Closer",
      desc: "Merch designs for my friend's band",
      date: "2017"
    },
    {
      src: "img/portfolio/other/truth.jpg",
      title: "Truth Ali",
      desc: "Album cover made for a hip-hop album",
      date: "2016"
    },
    {
      src: "img/portfolio/other/bird.jpg",
      title: "Grackle Illustration",
      desc: "",
      date: "2015"
    },
    {
      src: "img/portfolio/other/fearthesun.jpg",
      title: "Fear The Sun",
      desc: "Made for my own band, Fear the Sun",
      date: "2015"
    },
    {
      src: "img/portfolio/other/tarawa.jpg",
      title: "Tarawa Atoll",
      desc: "",
      date: "2015"
    },
    {
      src: "img/portfolio/other/monkey.jpg",
      title: "Hear No Evil",
      desc: "Poster I made to decorate my room",
      date: "2008"
    },
    {
      src: "img/portfolio/other/logs.jpg",
      title: "Logging Competition",
      desc: "This flyer won the competition in which it was entered",
      date: "2014"
    },
    {
      src: "img/portfolio/other/shantai.jpg",
      title: "Chef Shantai",
      desc: "Made for a private chef",
      date: "2015"
    },
    {
      src: "img/portfolio/other/ugw.png",
      title: "Urban Garden Workshop",
      desc: "Chicken coops and garden furniture",
      date: "2013"
    },
    {
      src: "img/portfolio/fun/lizard.jpg",
      title: "Giant Lizard",
      desc: "Godzilla, eat your heart out",
      date: "2015"
    },
    {
      src: "img/portfolio/fun/boxelder.jpg",
      title: "Giant Boxelder Bug",
      desc: "Common yet wise!",
      date: "2014"
    },
    {
      src: "img/portfolio/fun/bear.jpg",
      title: "Giant Bear",
      desc: "Watch out! The Irish Bear!",
      date: "2014"
    },
    {
      src: "img/portfolio/fun/giraffesketch.jpg",
      title: "Giraffe",
      desc: "A drawing I did of what is surely one of the strangest animals here on Earth.",
      date: "2015"
    },
  ],
  [ //web
    {
      src: "img/portfolio/web/nmshome.gif",
      title: "NewsMaker Homepage",
      desc: "Uses Bootstrap and Revolution Slider (mySQL + PHP). Includes video slider, animations, custom graphics",
      date: "2017"
    },
    {
      src: "img/portfolio/web/volunteer.jpg",
      title: "Volunteer Page",
      desc: "Uses Bootstrap, includes custom graphics",
      date: "2017"
    },
    {
      src: "img/portfolio/web/mikysite.jpg",
      title: "Miky's Bio",
      desc: "Includes picture slider and links.",
      date: "2015"
    },
    {
      src: "img/portfolio/web/fts.jpg",
      title: "Fear The Sun",
      desc: "Includes music player and video",
      date: "2015"
    },
    {
      src: "img/portfolio/web/contact.jpg",
      title: "PHP Contact Form",
      desc: "Simple PHP form I whipped up, with CAPTCHA and Bootstrap.",
      date: "2017"
    },
    {
      src: "img/portfolio/web/rideongive.jpg",
      title: "RideOn Donations",
      desc: "Uses Bootstrap. Includes dontation links",
      date: "2017"
    },
    {
      src: "img/portfolio/web/rideon.gif",
      title: "RideOn Homepage",
      desc: "Uses Bootstrap. Includes slider, video.",
      date: "2017"
    },
    {
      src: "img/portfolio/web/nms2.gif",
      title: "NewsMaker Control",
      desc: "Uses Bootstrap. Includes animations, product explanation.",
      date: "2017"
    },
    {
      src: "img/portfolio/web/nmsbanners.jpg",
      title: "NewsMaker Press Releases",
      desc: "Uses Bootstrap. Press Release Browser",
      date: "2017"
    },
    {
      src: "img/portfolio/web/mikysite2.jpg",
      title: "Miky's Homepage",
      desc: "",
      date: "2015"
    },
  ],
  [ //self
    {
      src: "img/portfolio/self/0.png",
      title: "Guitar",
      desc: "Just learning photoshop for the first time...",
      date: "2006"
    },
    {
      src: "img/portfolio/self/4.jpg",
      title: "Human Torch",
      desc: "A buff, young Hunter",
      date: "2008"
    },
    {
      src: "img/portfolio/self/8.jpg",
      title: "Bathroom",
      desc: "I made a softbox out of an old shoebox and lamp for this one",
      date: "2010"
    },
    {
      src: "img/portfolio/self/9.jpg",
      title: "All the Rain",
      desc: "Adolesence can be tough.",
      date: "2010"
    },
    {
      src: "img/portfolio/self/11.jpg",
      title: "Mouth Eyes",
      desc: "Still cracks me up",
      date: "2010"
    },
    {
      src: "img/portfolio/self/12.jpg",
      title: "Selfie Safari",
      desc: "In the Sahara",
      date: "2011"
    },
    {
      src: "img/portfolio/self/14.jpg",
      title: "Golden Boy",
      desc: "Hazy Moorpark Dayz",
      date: "2013"
    },
    {
      src: "img/portfolio/self/15.jpg",
      title: "Bitmap",
      desc: "Various Line Thicknesses",
      date: "2014"
    },
    {
      src: "img/portfolio/self/17a.gif",
      title: "Hunter the Egg Chef",
      desc: "When this was made, it was ironic, or something.",
      date: "2015"
    },
    {
      src: "img/portfolio/self/18.jpg",
      title: "Rugby Tough",
      desc: "Hunter in profile",
      date: "2016"
    },
    {
      src: "img/portfolio/self/20.png",
      title: "Shadow Hunter",
      desc: "With a fresh dome",
      date: "2017"
    },
    {
      src: "img/portfolio/self/21.jpg",
      title: "Overcast Plane",
      desc: "Peace and Tranquility",
      date: "2017"
    },
  ],
  [ //just 4 fun
    {
      src: "img/portfolio/fun/sean.jpg",
      title: "Sean",
      desc: "I don't know why someone so cool and smart would be so proud of their pants-pooping...",
      date: "2017"
    },
    {
      src: "img/portfolio/fun/ant.jpg",
      title: "Giant Ant",
      desc: "The ants go marching...",
      date: "2013"
    },
    {
      src: "img/portfolio/fun/bear.jpg",
      title: "Giant Bear",
      desc: "Watch out! The Irish Bear!",
      date: "2014"
    },{
      src: "img/portfolio/fun/csun.jpg",
      title: "Aerial CSUN",
      desc: "Aerial photograph I took of my Alma Mater",
      date: "2015"
    },{
      src: "img/portfolio/fun/dennis.jpg",
      title: "True American Hero",
      desc: "Dennis ran for Class President",
      date: "2008"
    },{
      src: "img/portfolio/fun/fish.jpg",
      title: "A Fish",
      desc: "A picture I took at an aquarium",
      date: "2015"
    },{
      src: "img/portfolio/fun/hopper.jpg",
      title: "Giant Grasshopper",
      desc: "A majestic, jumping fellow",
      date: "2014"
    },{
      src: "img/portfolio/fun/hummingbird.jpg",
      title: "Hummingbird",
      desc: "Concept for a tattoo that I did indeed get",
      date: "2015"
    },{
      src: "img/portfolio/fun/mantis.jpg",
      title: "Giant Mantis",
      desc: "The only arthropod with an articulated neck joint",
      date: "2015"
    },{
      src: "img/portfolio/fun/mars.jpg",
      title: "Marsasola",
      desc: "One of many silly photoshops I've made",
      date: "2012"
    },{
      src: "img/portfolio/fun/pikeplace.jpg",
      title: "Pike Place",
      desc: "Hard to avoid having a good time here",
      date: "2015"
    },{
      src: "img/portfolio/fun/c3posketch.jpg",
      title: "C-3PO",
      desc: "My favorite robot butler! Eat your heart out, Robby.",
      date: "2013"
    },{
      src: "img/portfolio/fun/commencement.jpg",
      title: "Commencement Sketch",
      desc: "A look at a process I took from sketch to finish.",
      date: "2016"
    },{
      src: "img/portfolio/fun/gab.png",
      title: "Gigi",
      desc: "A quick sketch of Gabrielle.",
      date: "2016"
    },{
      src: "img/portfolio/fun/giraffesketch.jpg",
      title: "Giraffe",
      desc: "A drawing I did of what is surely one of the strangest animals here on Earth.",
      date: "2015"
    },{
      src: "img/portfolio/fun/hdawg.jpg",
      title: "H-Dawg",
      desc: "A drawing of Former Secretary of State and Two-Time Almost President, Hillary Clinton.",
      date: "2016"
    },{
      src: "img/portfolio/fun/hitlersketch.jpg",
      title: "Hitler",
      desc: "Drawing of Adolf Hitler",
      date: "2016"
    },{
      src: "img/portfolio/fun/huntert.jpg",
      title: "Hunter S. Thompson",
      desc: "We have a name and a spirit in common.",
      date: "2016"
    },
    {
      src: "img/portfolio/fun/mirandasings.jpg",
      title: "Miranda Sings",
      desc: "A drawing of a strange internet personality",
      date: "2016"
    },
    {
      src: "img/portfolio/fun/mymom.jpg",
      title: "Jana",
      desc: "A drawing of my mom drawing me.",
      date: "2017"
    },
  ],
  [ //bgs
    {src: "img/patterns/circles.png"},
    {src: "img/patterns/diag.png"},
    {src: "img/patterns/geo.png"},
    {src: "img/patterns/grid.png"},
    {src: "img/patterns/maze.png"},
    {src: "img/patterns/sativa.png"},
    {src: "img/patterns/tris.png"},
    {src: "img/patterns/woven.png"},
    {src: "img/csun.png"},
    {src: "img/burst.png"},
    {src: "img/felt.png"},
    {src: "img/trees.png"},
  ],
  [ //video; include question mark
    {
      src: "img/portfolio/video/ankh.png",
      title: "ANKH",
      desc: "An Egyptian pyramid-builder is treated poorly by upper management. Won First Place and Student Choice Award - CSUN Multimedia Showcase 2016",
      date: "2016",
      vid: "j9aAnE_dtZE?",
      hover:true
    },
    {
      src: "img/portfolio/video/nab.jpg",
      title: "NewsMaker Reel 1",
      desc: "I made this video for NewsMaker using After Effects. It was used on the trade-show floor as an attract screen.",
      date: "2017",
      vid: "s2RRTY8mXUI?",
      hover:true
    },{
      src: "img/portfolio/video/nab2.jpg",
      title: "NewsMaker Reel 2",
      desc: "I made this video for NewsMaker using After Effects. It was used on the trade-show floor as an attract screen.",
      date: "2017",
      vid: "JZraJiQ99go?",
      hover:true
    },{
      src: "img/portfolio/video/3d.jpg",
      title: "My 1st 3D Animation",
      desc: "Someday, my career may involve super-awesome 3D graphics. Until then, I'm mostly focusing on web development.",
      date: "2015",
      vid: "m2RqCsMbOf0?",
      hover:true
    },{
      src: "img/portfolio/video/sunshine.jpg",
      title: "Sunshine",
      desc: "A story about a man who has lived his entire life within the bounds of CSUN's campus.",
      date: "2016",
      vid: "hLYlATB4iWg?",
      hover:true
    },
    {
      src: "img/portfolio/video/news.jpg",
      title: "The Right Technology",
      desc: "An explainer video for NewsMaker Systems.",
      date: "2017",
      vid: "fo2OsnTkYDM?",
      hover:true
    },
  ],
  [ //coding
    {
      src: "img/portfolio/coding/cleanup.gif",
      title: "NewsCaster CLEANUP",
      desc: {
        p:["\u00A0 NewsCaster CLEANUP was an in-house CRUD application designed to dynamically parse the NewsCaster Database, detect the folder architecture of the NewsCaster, and look for issues with the clip library such as orphaned clips. It generates a report, and gives the user the ability to delete the problem files from the system.",
        "\u00A0 I developed NewsCaster CLEANUP independently, using the powerful JavaScript technology called Electron. After this project, my JS skills were rather robust; I could set up and use Node (and its fs module), advanced ES6 techniques like async/await, and build React apps from scratch.",
        "\u00A0 Because of NC CleanUp, the NewsMaker development team was able to increase the volume of their workflow as well as identify previously unnoticed bugs in the NewsCaster Media Manager."
        ],
        tech:[
          {name:"NodeJS", link:"https://nodejs.org/en/", color:"terminal-green"},
          {name:"ReactJS", link:"https://reactjs.org/", color:"blue"},
          {name:"Electron", link:"https://electronjs.org/", color:"lightest-blue"},
          {name:"Tachyons", link:"http://tachyons.io/", color:"white"},
        ]
      },
      date: "2017"
    },
    {
      src: "img/portfolio/coding/bardo.gif",
      title: "BARDO: The Savior",
      desc: {
        p:[
          "\u00A0 Bardo won 1st place in Games at the 2017 CSUN Multimedia Showcase.",
          "\u00A0 Bardo the Savior is a 10-20 minute original point-and-click adventure game. Modelled after classic Humongous Entertainment inc. games such as Pajama Sam and Freddi Fish, Bardo moves the format into a new era with a completely browser-based form factor.",
          "\u00A0 This was one of my first major JavaScript programming projects. With hindsight, it was incredibly ambitious and took me from beginner to intermediate quicker than any online course did. Bardo includes three seperate puzzles, a dynamic event scripting system, custom sprite-based animation, a dynamic dialogue system, and a custom inventory system. I also wrote my own photoshop script to take animations and spread them out into enormous sprite sheets.",
        ],
        tech:[
          {name:"Sprite.ly", link:"http://spritely.net/", color:"green"},
          {name:"jQuery", link:"https://jquery.com/", color:"blue"},
          {name:"CreateJS", link:"https://createjs.com/", color:"yellow"},
        ],
        plug:{
          link:"http://www.huntermaverickwells.com/img/portfolio/coding/bardo/bardo.html",
          text:"Click here to play Bardo. (Not optimised for mobile)"
        }
      },
      date: "2016"
    },
    {
      src: "img/portfolio/coding/poker.gif",
      title: "Hunter's Poker",
      desc: {
        p:[
          "\u00A0 Hunter's Poker is a React-based draw poker game. I made Hunter's Poker as a means to convince YOU (yes, you) that I have the webdev chops to produce a polished and engaging interactive interface.",
          "\u00A0 Hunter's Poker implements the Fisher-Yates shuffle algorithm to generate a new virtual deck for each hand. Each player is dealt five cards and then they are given a chance to hold up to all five. Players are dealt remaining cards and then the hands are scored, compared, and a winner is delcared. Your opponent's AI is basic, but employs a winning long-term strategy. He always go for the flush!",
          "\u00A0 If you can play 20 hands of this game and have a win percentage over 50%, maybe you should try that luck in Las Vegas!",
        ],
        tech:[
          {name:"ReactJS", link:"https://reactjs.org/", color:"blue"},
          {name:"Tachyons", link:"http://tachyons.io/", color:"white"},
          {name:"Howler", link:"https://howlerjs.com/", color:"green"},
          {name:"Bluebird", link:"http://bluebirdjs.com/docs/getting-started.html", color:"blue"},
        ],
        plug:{
          text:"Click the POKER button at the top of your screen to play Hunter's Poker."
        }
      },
      date: "2017"
    },
    {
      src: "img/portfolio/coding/portfolio.gif",
      title: "This Very Interface",
      desc: {
        p:[
          "\u00A0 I made the image browser you are currently using to display my challengingly varied and volumetric portfolio. In addition to the actual contents of this portfolio, I wanted to show off my flourishing React abilities by creating an interactive browser.",
          "\u00A0 A bulk of the work performed during the process of making this browser was spent processing the numerous digital assets I've made during my career, selecting the best ones, and re-saving them in a compact web-friendly format. One of my main priorities was to keep the overall filesize of these digital assets as small as possible, so that they could all be preloaded. It currently is under 50MB, with almost 200 image assets.",
          "\u00A0 Thank you for viewing my portfolio! I hope you are enjoying your visit as much as I have enjoyed my career thus far.",
        ],
        tech:[
          {name:"ReactJS", link:"https://reactjs.org/", color:"blue"},
          {name:"Tachyons", link:"http://tachyons.io/", color:"white"},
        ],
      },
      date: "2017"
      },
  ],
]

const blurbs = [
  { //csun
    title:"CSUN",
    subtitle:"Hail to the Matadors",
    date:"2016-2017",
    paras:["\u00A0 As graphic designer, I supported two campus institutions (O.S.I.D and the M.I.C.) that both required multiple large-scale projects to be worked on concurrently throughout the year. ", "\u00A0  The CSUN Office of Student Involvement and Development is the organization at CSUN behind events with over 20,000 students and guests in attendance such as Commencement and Orientation. The Matador Involvement Center is the governing body for all clubs, fraternities, and sororities on campus."],
    highlights:["Pioneered Role Responsibilities", " Produced Content for Large-Scale Events", "Blossomed into a Professional Designer"]
  },
  { //nms
    title:"NewsMaker Systems",
    subtitle:"'We Make News'",
    date:"2017",
    paras:["\u00A0 At NewsMaker, I directed and supervised all media production as well as performing support technician duties. During my time, I produced a large volume of graphic design work, multimedia, and also developed an in-house NodeJS CRUD application.", "\u00A0 NewsMaker Systems creates innovative and easy-to-use live news automation systems for the television news industry. We offer the only automation suite designed specifically for the NewTek TriCaster® Family & IP Series. "],
    highlights:["Developed In-House Diagnostic Utility", "Designed Company Identity", "Contributed to Product UI development"]
  },
  { //acasola
    title:"Acasola",
    subtitle:"CSUN's 1# Acappella Group",
    date:"2012-2015",
    paras:["\u00A0 During my time with CSUN Acasola, I produced various artworks and advertisements. Posters, flyers, programs, t-shirts, tickets, web graphics, and more. I developed a new branding identity which is still in use, and had a good time singing, too.", "\u00A0 Acasola is CSUN's Premiere A Cappella Group. Acasola has appeared on network television shows such as ABC's Castle and FOX's Raising Hope. Acasola has also won regional competitions such as the LA A Cappella Festival. "],
    highlights:["Bass Section Leader", "Produced and Auctioned Full-size Posters", "Appeared on TV"]
  },
  { //other
    title:"Other Stuff",
    subtitle:"Freelance, and more...",
    date:"2006-Present",
    paras:["\u00A0 I've been making things with my computer since I was quite young. Over the years I've completed lots of miscellaneous and freelance projects in different mediums. Whenever my football team needed an awesome design for a t-shirt, or my band needed flyers and a website; I was the go-to guy. As I got older, my friends needed websites and I started to pick up gigs with small businesses."],
    highlights:["Adobe Creative Suite Expert", "Training in Design, Cartography, and Multimedia", "Found Passion for Web Development"]
  },
  { //web
    title:"Websites",
    subtitle:"Webstuffs that I've made.",
    date:"2008-Present",
    paras:["\u00A0 In 2014, I started to learn the web technologies that I know and love today. Along the way, I've gotten the opportunity to design some different websites. It's been a long road, and the end is nowhere in sight! I love working on the web; I think it's perhaps the most powerful medium that humanity has ever created."],
    highlights:["Went from Bootstrap to Advanced Vanilla and React", "Custom Graphics and video", "Loves Clever, Elegant Web Solutions"]
  },
  { //self
    title:"Self-Portraits",
    subtitle:"Affectionately known as 'Selfies'",
    date:"2006-Present",
    paras:["\u00A0 I grew up during the dawn of the MySpace profile picture. As such, I have always utilized Photoshop to upgrade a regular picture of myself into something a little more expressive and artistic. Now that they're all together, they form an interesting introspection. These images act as a record of the development of my design skills, and my maturation as a digital artist."],
    highlights:["Advanced Photoshop", "Coming-of-age", "Puberty"]
  },
  { //fun
    title:"Just For Fun",
    subtitle:"Weird One-Offs and Fun-Times",
    date:"2008",
    paras:["\u00A0 These are some miscellaneous sketches and projects that I've accumulated. With great Photoshop power, comes great responsibility. Everything here has a grain of salt that comes with it! I also included some of the sketches and photographs that I've produced."],
    highlights:["Pranks", "Sketches", "Photographs"]
  },
  { //bgs (blank)
    title:"",
    subtitle:"",
    date:"",
    paras:["", ""],
    highlights:["", "", ""]
  },
  { //video
    title:"Videos & Animations",
    subtitle:"Videos are worth a thousand words, 29.97 times a second.",
    date:"2015-2017",
    paras:["\u00A0 Here is a selection of some of my best videos and animations. I never could afford a fancy camera, so I always gravitated towards making my own pizazz with motion graphics. In the past, I have made both motion-graphic presentations and narrative cartoons. Nowadays, I am quite comfortable with animation workflow and production. I can also edit compentently and do my own audio."],
    highlights:["'ANKH' Won 1st Place", "After Effects, Premiere & Flash", "Will Someday Get Much Better with 3D Animation."]
  },
  { //coding
    title:"Coding Projects",
    subtitle:"JavaScript Programming",
    date:"2016-Present",
    paras:["\u00A0 In the past few years, I have focused on developing my JS programming skills. My main interest is in UI design and Frontend Development. Today I can use React, Node, Electron, and Vanilla JS comfortably. I like to use Browserify, Gulp, Atom, and some other related tools like Webpack. My favorite JS books are the 'You Don't Know JS' Series by Kyle Simpson."],
    highlights:["React Fanboy", "Uses Programming Puzzles to Train JS Skills", "Strong Passion for Frontend & UI"]
  },
];

function shuffleArray(array) { //shuffle display order of thumbs
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const shuffledImages = images.map(x => shuffleArray(x));

const imagePaths = images.reduce( //get path of all images 4 preload
  function(acc, curr) {
    let srcs = [];
    curr.forEach(function(obj){
      srcs.push(obj.src)
    })
    return [...acc, ...srcs];
  },
  []
)

const bgPaths = images[7].reduce( //get path of all images 4 preload
  function(acc, curr) {
    let srcs = [];
    srcs.push(curr.src)
    return [...acc, ...srcs];
  },
  []
)

export class Portfolio extends React.Component {
  constructor(props){
    super(props);
    this.handleMobileSetChange = this.handleMobileSetChange.bind(this);
    this.activatePreload = this.activatePreload.bind(this);
    this.preloadImages = this.preloadImages.bind(this);
    this.changeLook = this.changeLook.bind(this);
    this.state = {
      mobileSet:0,
      loadedCount:0,
      loadingText:"View HMW's Portfolio",
      loading:false,
      loadingViewOn:true,
      imageView:false,
      background:"woven",
      color:"orange"
    };
  };


  componentDidMount(){
  setTimeout(() => this.activatePreload(), 500);
  }

  changeLook(color, background){

    this.setState({color: color, background: background})

  }

  preloadImages(srcs) {
    var count = 0;
    const countup = num => this.setState({ loadedCount: num});
    function loadImage(src, index) {
        return new Promise(function(resolve, reject) {
            var img = new Image();
            img.onload = function() {
              count++;
              countup(count);
              resolve(img);
            };
            img.onerror = img.onabort = function() {
              reject(src);
            };
            img.src = src;
        });
    }
    var promises = [];
    for (var i = 0; i < srcs.length; i++) {
        promises.push(loadImage(srcs[i], i));
    }
    return Promise.all(promises);
  }

  activatePreload(){
    if (!this.state.loading){
      this.preloadImages(bgPaths)
        .then(
          (imgs) =>
          this.setState({
            loading:false,
            loadingViewOn:false,
            imageView:true,
            color: "orange",
            background:"woven"
          }), (errImg) => alert(errImg)
        )
        .then(this.setState({loadingText:"LOADING", loading:true}));
    }
  }

  handleMobileSetChange(index){
    this.setState(() => {
      return { mobileSet:index};
    });
  }

  render() {
    let {loadingViewOn, imageView, loading, loadedCount, background, color} = this.state;
    let imageCount = bgPaths.length;
    let barPercentage = ((Math.ceil((loadedCount/imageCount)*100)).toString())+"%";
    let barWidth = {width:barPercentage}
    let navtextcolors = {"purple":true, "csun-red":true, "nms-blue":true, "orange":true}
    return(
      <div className={`flex flex-column justify-start h-100 w-100 relative`}>
        <div className={`absolute block bgtransimg ${background} w-100 h-100 t-0`}></div>
        <nav className={` ${"bg-" + color} w-100 h2 pv2 tr-ns tc  flex flex-column justify-center shadow-3 z-4`}>
          <div className=" nowrap">
            <Link to="/"
              className={
              `link dim select-orange ${navtextcolors[color] ? "white" : "black"} f7 f6-ns helvetica dib mh3 tracked`
              }
            >HOME</Link>
            <Link to="/portfolio"
              className={
              `link dim select-orange ${navtextcolors[color] ? "white" : "black"} f7 f6-ns fw8  helvetica dib mh3 tracked`
              }
            >PORTFOLIO</Link>
            <Link to="/about"
              className={
              `link dim select-orange ${navtextcolors[color] ? "white" : "black"} f7 f6-ns helvetica dib mh3 tracked`
              }
            >ABOUT</Link>
            <Link to="/poker"
              className={
              `link dim select-orange ${navtextcolors[color] ? "white" : "black"} f7 f6-ns helvetica dib mh3 tracked`
              }
            >POKER</Link>
          </div>
        </nav>

        {loadingViewOn &&
          <div
            className="flex flex-column justify-center h-100 w-100"
          >
            <div
              className="self-center pa4 tc white helvetica tracked mh2"
            >
              <img
                src="../img/loader.svg"
                className="w-60 self-center"
              />
              <h1 className="orange">LOADING PORTFOLIO</h1>
              <div
                onClick={this.activatePreload}
                className="db bw1 flex flex-column justify-center center h3 w7 self-center ba b--orange br3 bg-white-10 bg-white-hover grow pointer relative "
              >
                <p className="z-4 select-orange">
                  {this.state.loadingText}
                  {loading && " .... " + barPercentage}
                </p>
                {loading &&
                  <div
                    className="h-100 absolute bg-orange br2 top-0 left-0 z-0"
                    style={barWidth}
                  />
                }
              </div>
            </div>
          </div>
        }

        {imageView &&
          <div className="w-100 h-95">
            <ImageViewer
              images={shuffledImages}
              blurbs={blurbs}
              mobileSet={this.state.mobileSet}
              changeLook={this.changeLook}
              color={this.state.color}
            />
          </div>
        }
        <footer className={`w-100 h1 bg-${color} tr z-4`}></footer>
        </div>
    )
  }
}
