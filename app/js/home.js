import React from 'react';
import { Route, Link } from "react-router-dom";

import { Quote } from './quotes.js'

export class Home extends React.Component {
  constructor(props){
    super(props);

    this.state = {browser:true}
  };

  componentDidMount() {
    if (typeof window.getComputedStyle(document.body).backgroundBlendMode ==  'undefined') {
      console.log("BAD BROWSER DETECTED")
      this.setState({browser:false})
    }
  }

  render() {
    let {browser} = this.state;
    return(
      <div className=" fixed top-0 w-100 mw-100 h-100 maze flex flex-column items-center justify-end ving relative ">
        <div className="absolute top-0 left-0 w-100 mw-100 h-100 h-100 flex flex-column justify-between ph5-ns ph4 pb3-m z-3">
          <div className="w-100 h4-l h3-ns">
            <div className="h4 fl ">
              <div className="h-70 white hover-white f1-ns f3 fw8 ph3 no-underline baskerville shadow-3 bg-white-10 br3 br--bottom fl bb b--orange bw2 arrowpointer flex flex-column justify-center">
                H
              </div>
              <div className="fl dn flex-ns flex-column justify-center  ml4 h-70 ">
                <span className="mv1 fl f5-ns f7 white-40 helvetica tracked-mega textshadow arrowpointer moveright">// FRONTEND DEVELOPER</span>
                <span className="mv1 fl f5-ns f7 white-40 helvetica tracked-mega textshadow arrowpointer moveright">// DIGITAL DESIGNER</span>
              </div>
            </div>
            {browser &&
              <Link to="/poker" className="white-50 hover-white f4-ns f5 f1-xl fw1-ns fw8 no-underline helvetica tracked-mega grow fr pv4 pv5-xl  butt poke-butt top-butt">
                POKER
              </Link>
            }
          </div>
          {browser &&
            <div className="w-100 h3-ns mb4-l mb4-xl h4-xl">
              <Link to="/portfolio" className="white-50 hover-white f4-ns f5 f1-xl fw1-ns fw8 no-underline helvetica tracked-mega grow fl bn pv4 pv5-xl pb5-m butt port-butt bot-butt">
                PORTFOLIO
              </Link>
              <Link
                to="/about"
                className="white-50 hover-white f4-ns f5 f1-xl fw1-ns fw8 no-underline
                helvetica tracked-mega grow fr pv4  pb5-m pv5-xl butt bout-butt bot-butt "
              >
                ABOUT
              </Link>
            </div>
          }
        </div>
        <div id="" className="z-1 flex flex-column h-100 justify-center bg-center blank-ns">
  				<div className="f3 f1-m f1-l f-6-xl relative white baskerville tracked-tight w-two-thirds flex flex-column self-center items-center hmw-shadow ">

  					<h1 className="ma0 z-3">HUNTER</h1>
  					<h1 className="ma0 z-3">MAVERICK</h1>
  					<h1 className="ma0 z-3">WELLS</h1>
  					<div className="snake-ns contain bg-top"></div>
  				</div>
          <Quote className="z-3 h3-ns h-30"/>

        </div>
        <div className="w-100 h-100 snake o-30 absolute bg-center z-0 dn-ns">
        </div>

      </div>
    )
  }
}
