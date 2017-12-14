import React from 'react';
import { Route, Link } from "react-router-dom";

export class About extends React.Component {
  constructor(props){
    super(props);

    this.state = {browser:true}
  };

  render() {
    let {browser} = this.state;
    return(
      <div className="fixed w-100 h-100 flex flex-column bg-navy ocean cover ">
        <nav className="bg-navy w-100 h2 pv1 tr-ns tc  flex flex-column justify-center shadow-3 z-4">
          <div className=" nowrap">
            <Link to="/"
              className={
              `link white-70 dim select-orange f7 f6-ns helvetica dib mh3 tracked`
              }
            >HOME</Link>
            <Link to="/portfolio"
              className={
              `link white-70 dim select-orange f7 f6-ns helvetica dib mh3 tracked`
              }
            >PORTFOLIO</Link>
            <Link to="/about"
              className={
              `link white-70 dim select-orange f7 f6-ns fw8 helvetica dib mh3 tracked`
              }
            >ABOUT</Link>
            <Link to="/poker"
              className={
              `link white-70 dim select-orange f7 f6-ns helvetica dib mh3 tracked`
              }
            >POKER</Link>
          </div>
        </nav>
        <div className="h-100 w-100 flex flex-row-ns justify-center-ns flex-column ">

          <div className="h-100-ns h-40 w-40-ns w-100 pv4-ns pv2 flex flex-column-ns flex-row justify-around relative ph2">

            <div className="w-70-ns h-100 h-70-ns w-40 f4-ns f7 fw6  self-center-ns textshadowsmall flex flex-column justify-center ">
              <img src="img/bluehunter.jpg" className="h6-ns h-auto maxh-80 w-auto img center self-center ba bw1 white-70 shadow-3 "/>
              <div className="self-center flex flex-row justify-around mv0 h2 w-70 w-60-m w-50-l mv2-ns">
                <a target="_blank" href="https://github.com/hunnuh/" className=" link pointer hover-light-purple orange avenir tracked relative self-center">GitHub</a>
                <span className="pa0 link pointer white avenir tracked relative self-center"> | </span>
                <a target="_blank" href="https://www.linkedin.com/in/huntermaverickwells/" className=" link pointer hover-light-purple orange avenir tracked relative self-center"> LinkedIn </a>
              </div>
            </div>
            <div className="w-70-ns w-50 h4-ns h-100 navybgpseudo self-center-ns relative  ba bw1 b--white-70 ">
              <div className="h-100 w-100 overflow-y-scroll overflow-x-hidden orangescrollsmall pa3">
                <h5 className="mv2 white avenir tracked">Email Me:</h5>
                <a target="_blank" href="mailto:hunter.m.wells@gmail.com" className="f7 mh3-ns white avenir tracked">hunter.m.wells@gmail.com</a>
                <h5 className="mv2 white avenir tracked">About This Site:</h5>
                <p className="f7 mh3-ns white avenir tracked lh-copy-ns">Thanks for visiting my website. I built it with React and React Router to deliver a superior responsive, interactive, and beautiful web space.</p>
                <p className="f7 mh3-ns white avenir tracked lh-copy-ns"> If you want to talk about working together, there's nothing I like talking about more. Don't hesitate to send me an email at the address listed above.</p>
                <h5 className="mv2 white avenir tracked">Credits:</h5>
                <p className="f7 mh3-ns white avenir tracked">"Backbay Lounge" Kevin MacLeod (incompetech.com) <br/> Licensed under Creative Commons: By Attribution 3.0 License <br/>
                </p>
                <p className="f7 mh3-ns white avenir tracked lh-copy-ns">Special thanks to my girlfriend for tolerating all the long hours I spent on this website, and to all my friends and family for the great feedback.
                </p>
              </div>
            </div>

          </div>



          <div className="h-100 w-60-ns w-100  navybgpseudo relative flex flex-column justify-center shadow-3 br3 br0-ns bl br bw2 b--white-60">


            <div className="w-100 h-100-ns flex flex-row justify-center pv4-ns pv2 ph2">
              <div className="w-100 h-100-ns flex flex-column justify-start items-center  br4 overflow-y-scroll orangescrollsmall ">

                <div className="w-80-l w-90-m ph5-l ph2 bg-black-30 br3 bt bb bw2 b--white-60">

                  <div className="w-100 bb bw1 b--orange">
                    <div className="w-100 mb3 flex flex-column justify-center bb bw1 b--orange pv4">
                      <img className="w-70 center " src="img/skull.svg"/>
                    </div>
                    <div className=" flex flex-row-ns flex-column items-baseline mv4-ns mv2">
                      <h1 className="w4 tr-ns tl mv0-ns mv2 mr4-ns f6 tracked white-60 i fw1-ns fw3 helvetica">Name</h1>
                      <p className="mv0 f3-l f3 fw8  baskerville white textshadowsmall ">HUNTER MAVERICK WELLS</p>
                    </div>
                    <div className=" flex flex-row-ns flex-column items-baseline mv4-ns mv2">
                      <h1 className="w4 tr-ns tl mv0-ns mv2 mr4-ns f6 tracked white-60 i fw1-ns fw3 helvetica">Title</h1>
                      <p className="mv0 f5-ns f6 avenir white tracked textshadowsmall">Frontend Developer // Digital Designer</p>
                    </div>
                    <div className=" flex flex-row-ns flex-column items-baseline mv4">
                      <h1 className="w4 tr-ns tl mv0-ns mv2 mr4-ns f6 tracked white-60 i fw1-ns fw3 helvetica">Locale</h1>
                      <p className="mv0 f5-ns f6 avenir white tracked textshadowsmall">Los Angeles, CA</p>
                    </div>
                  </div>

                  <div className="w-100   bb bw1 b--orange">
                    <div className=" flex flex-row-ns flex-column items-baseline mv4">
                      <h1 className="w4 tr-ns tl mv0-ns mv2 mr4-ns f6 tracked white-60 i fw1-ns fw3 helvetica">Bio</h1>
                      <p className="mv0 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall">Designing beautiful and functional webstuffs is my strongest passion. I'm a productive, high-effort teammate; the kind of guy that comes in clutch when the chips are down. </p>
                    </div>
                    <div className=" flex flex-row-ns flex-column items-baseline mv4">
                      <h1 className="w4 tr-ns tl mv0-ns mv2 mr4-ns f6 tracked white-60 i fw1-ns fw3 helvetica">Ethos</h1>
                      <p className="mv0 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall">As a designer, I balance a bold, clear style with attractive details and heirarchy. As a developer, I have a fierce troubleshooting instinct and my #1 priority is producing a seamless user experience. </p>
                    </div>
                    <div className=" flex flex-row-ns flex-column items-baseline mv4">
                      <h1 className="w4 tr-ns tl mv0-ns mv2 mr4-ns f6 tracked white-60 i fw1-ns fw3 helvetica">Tools</h1>
                      <div className=" flex flex-column justify-start">
                        <p className="mv2 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall"><b>Adobe:</b> Photoshop, Illustrator, After Effects, Premiere, Animate (Flash), Audition, inDesign, Lightroom </p>
                        <p className="mv2 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall"><b>JS:</b> React, Atom, Electron, Tachyons, mySQL, lowDB, Bluebird, jQuery, Bootstrap, Howler, and many other npm packages.</p>
                        <p className="mv2 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall"><b>Other:</b> ArcGIS, SketchUp, Terragen, Unity, Maya</p>
                      </div>

                    </div>
                  </div>

                  <div className=" w-100 bb bw1 b--orange">

                    <div className=" flex flex-row-ns flex-column items-baseline mv4">
                      <h1 className="w4 tr-ns tl mv0-ns mv2 mr4-ns f6 tracked white-60 i fw1-ns fw3 helvetica">Experience</h1>
                      <div className=" flex flex-column justify-start">
                        <div className="mb3 flex flex-column justify-start">
                          <p className="mv1 f4-ns f5 fw6 avenir tracked orange textshadowsmall">Media Director // Client Server Technician </p>
                          <p className="mv1 f4-ns f5 avenir tracked white textshadowsmall"> NewsMaker Systems, LLC</p>
                          <p className="mt0 mb2 f6 avenir tracked white-60 textshadowsmall">Moorpark, CA ◈ January '17 - December '17</p>
                          <p className="mv1 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall">Developed in-house diagnostic utility with NodeJS + React. Directed all media production. Troubleshot, constructed, installed client servers.  </p>
                        </div>
                        <div className="mv3 flex flex-column justify-start">
                          <p className="mv1 f4-ns f5 fw6 avenir tracked orange textshadowsmall">Graphic Designer</p>
                          <p className="mv1 f4-ns f5 avenir tracked white textshadowsmall"> CSUN (CSU Northridge)</p>
                          <p className="mt0 mb2 f6 avenir tracked white-80 textshadowsmall">Northridge, CA ◈ January '16 - January '17</p>
                          <p className="mv1 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall">Produced large volume of design work for two campus institutions. Developed multiple large-scale projects. </p>
                        </div>

                        <div className="mv3 flex flex-column justify-start">
                          <p className="mv1 f4-ns f5 fw6 avenir tracked orange  textshadowsmall">Graphic Designer</p>
                          <p className="mv1 f4-ns f5 avenir tracked white textshadowsmall">Acasola</p>
                          <p className="mt0 mb2 f6 avenir tracked white-80 textshadowsmall">Northridge, CA ◈ 2012 - 2015</p>
                          <p className="mv1 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall">Developed branding scheme and produced numerous flyers, posters, t-shirts, and other graphics. </p>
                        </div>
                        <div className="mv3 flex flex-column justify-start">
                          <p className="mv1 f4-ns f5 fw6 avenir tracked orange  textshadowsmall">Freelance Digital Design</p>
                          <p className="mv1 f4-ns f5 avenir tracked white textshadowsmall">Various Clients</p>
                          <p className="mt0 mb2 f6 avenir tracked white-80 textshadowsmall">Seattle, WA // Los Angeles, CA ◈ 2006 - Present</p>
                          <p className="mv1 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall">Produced various graphics, print, videos, websites, animations, and more. </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" w-100 bb bw1 b--orange">
                    <div className=" flex flex-row-ns flex-column items-baseline mv4">
                      <h1 className="w4 tr-ns tl mv0-ns mv2 mr4-ns f6 tracked white-60 i fw1-ns fw3 helvetica">Education</h1>
                      <div className="mb3 flex flex-column justify-start">
                        <div className="mb3 flex flex-column justify-start">
                          <p className="mv1 f4-ns f5 fw6 avenir tracked orange textshadowsmall">B.A. in Multimedia Production </p>
                          <p className="mv1 f4-ns f5 avenir tracked white textshadowsmall">Cinema & Television Arts</p>
                          <p className="mv0 f6 avenir tracked white-60 textshadowsmall">California State University, Northridge ◈ 2012 - 2016</p>
                        </div>
                        <div className="mt3 flex flex-column justify-start">
                          <p className="mv1 f4-ns f5 fw6 avenir tracked orange textshadowsmall">B.A. in Geographic Information Systems </p>
                          <p className="mv1 f4-ns f5 avenir tracked white textshadowsmall">Geography</p>
                          <p className="mv0 f6 avenir tracked white-60 textshadowsmall">California State University, Northridge ◈ 2012 - 2016</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className=" w-100 bb bw1 b--orange">
                    <div className=" flex flex-row-ns flex-column items-baseline mv4">
                      <h1 className="w4 tr-ns tl mv0-ns mv2 mr4-ns f6 tracked white-60 i fw1-ns fw3 helvetica">Loves</h1>
                      <div className=" flex flex-column justify-start">
                        <p className="mv2 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall">Design, 3D Printing, Virtual Reality, Games of all kind (including but not limited to PC Games, Retro Video Games, and American Football), Computers, Singing, English Flute, Guitar, Skateboarding, Juggling, Cryptocurrency, Reptiles</p>
                      </div>
                    </div>
                    <div className=" flex flex-row-ns flex-column items-baseline mv4">
                      <h1 className="w4 tr-ns tl mv0-ns mv2 mr4-ns f6 tracked white-60 i fw1-ns fw3 helvetica">Awards/Press</h1>
                      <div className=" flex flex-column justify-start">
                        <p className="mv3 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall">◈ 2017 - 1st place in games at 2017 CSUN Multimedia Showcase for point-and-click adventure game "BARDO."</p>

                        <p className="mv3 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall">◈ 2016 - 1st Place in animation at 2016 CSUN Multimedia Showcase for animated short film “ANKH."</p>

                        <p className="mv3 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall">◈ 2016 - Student's Choice Award at 2016 CSUN Multimedia Showcase for animated  short film “ANKH."</p>

                        <p className="mv3 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall">◈ 2016 - Featured in <a className="orange link" target="_blank" href="https://www.csun.edu/mynorthridge/news/mapping-out-future">"Mapping Out a Future,"</a> an article published in CSUN News</p>

                        <p className="mv3 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall">◈ 2015 - Recipient of merit-based scholarship, the Carson Schrieber Interactive Media Award.</p>

                        <p className="mv3 f5-ns f6 avenir white measure-wide tracked lh-copy textshadowsmall">◈ 2015 -  Qualified for Spring Dean’s List for outstanding Academic Achievement (>3.5 GPA).</p>


                      </div>
                    </div>
                  </div>
                  <div className="w-100 mt3 flex flex-column justify-center">
                    <img className="w-70 mb3 center " src="img/cherub.svg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
