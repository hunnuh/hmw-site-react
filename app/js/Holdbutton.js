import React from 'react';

export class Holdbutton extends React.Component {

  render() {
    let {flipped, held, holdCard, buttonEnabled} = this.props;
    return(
      <div className="h-100 ph2 cardwidth" style={{width: this.props.width + "px"}}>
        <div
          className={`h-100 w-100 ba  br3 tc f5--l f7 helvetica flex flex-column justify-center b tracked bw1 select-orange
            ${
              held ?
              " b--white white bg-orange" :
                buttonEnabled ? "grow pointer b--orange bg-white-20 bg-white-hover orange" :
                " b--gray gray arrowpointer"
            } `}
          onClick={buttonEnabled ? holdCard : () => null}
        >
          {held ? "CANCEL" : "HOLD"}
        </div>
      </div>
    )
  }
}
