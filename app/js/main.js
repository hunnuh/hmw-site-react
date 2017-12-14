import React, { Component, PropTypes } from 'react';
import { Route, Link } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';


import { Home } from './home.js'
import { Poker } from './poker.js'
import { Portfolio } from './portfolio.js'
import { About } from './about.js'


export class Main extends React.Component {
  constructor(props){
    super(props);

    this.state = {}
  };

  render() {

    return(
      <div className="w-100 h-100 mw-100">
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route exact path="/" component={Home} />
          <Route exact path="/poker" component={Poker} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </AnimatedSwitch>

      </div>

    )
  }
}
