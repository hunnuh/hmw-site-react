import React, { Component } from 'react';


class PortfolioWelcome extends Component {


  render() {

    return (
      <div className="w-100 h-100 flex flex-row justify-center  ">
        <div className="w-50-ns h-50 w-80 flex flex-column self-center justify-center pa4-ns white helvetica">
          <div className="flex flex-column justify-around-ns justify-center relative bg-dark-gray ba bw1 b--orange br3 shadow-3 pv4-ns ph4 h-100 hmwbg contain floating ">
            <img
              src="../img/fingerup.svg"
              className="w-30-l w4-m w3 self-center hmw-shadow rotate-270-ns "
            />
            <h1 className="f3-ns f4 tracked tc hmw-shadow arrowpointer  ">
              Choose a button <span className="dn di-ns ">on the left</span><span className="di dn-ns ">above</span> to see all the cool stuff I've ever made.
            </h1>


            <span className="f3 mr4-ns pr5-ns pr3 tr orange hmw-shadow baskerville arrowpointer fw7">
              -HMW
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioWelcome;
