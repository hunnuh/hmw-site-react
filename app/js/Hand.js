import React from 'react';
import {Card} from './Card.js'

let handcontainer = null;
let handcontainerheight = null;

export class Hand extends React.Component {
  constructor(props){
    super(props);
    this.handleResize = this.handleResize.bind(this);
    this.state = {cardwidth:0}
  };

  componentDidUpdate(){
    let {index, id} = this.props
    let cardlist = [...document.querySelectorAll(".card")];
    let sliderheight = document.getElementsByClassName("card-slider")[0].clientHeight;
    let cardheight = document.getElementsByClassName("card")[0].clientHeight;
    let dist = sliderheight-cardheight;



    cardlist.forEach( //handles card transforms
      (card, index) => {
        if (card.classList.contains("held")){
          if (card.classList.contains("flipped")){
            card.style.transform="translateY("+dist+"px) rotateY( 180deg )";
          }
          else{
            card.style.transform="translateY("+dist+"px)";
          }
        }
        else if(card.classList.contains("flipped")){
          card.style.transform="rotateY( 180deg )";
        }
        else{
          card.style.transform=""
        }
      }
    )
  }

  componentDidMount(){
    handcontainer = document.getElementById("hand-container");
    handcontainerheight = handcontainer.clientHeight;
    let cardwidth = Math.floor(handcontainer.clientHeight * .5764)
    this.setState({cardwidth:cardwidth})
    if(this.props.echoSize){
      this.props.echoSize(cardwidth);
    }
    window.addEventListener('resize', this.handleResize);
  }

  handleResize(e) {

    let resizeTimeout;

    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        handcontainerheight = handcontainer.clientHeight;
        let cardwidth = Math.floor(handcontainer.clientHeight * .5764)
        this.setState({cardwidth: cardwidth});
        if(this.props.echoSize){
          this.props.echoSize(cardwidth);
        }
      }, 66);
    }
  }

  render() {
    let {flipped, held, cards, float, id} = this.props.hand;
    let {holdCard, enableClick} = this.props;

    let cardarray = cards.map((cards, index)=>
      <Card
        id = {id + index.toString()}
        key = {index}
        width = {this.state.cardwidth}
        flipped={flipped[index]}
        held={held[index]}
        card={cards}
        floating={float[index]}
        holdCard={enableClick ? () => holdCard(index) : () => null}
      />
    )

    return(

      <div className="h-100 w-100 flex flex-row justify-center">
        {cardarray}
      </div>
    )
  }
}
