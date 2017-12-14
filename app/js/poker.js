import React from 'react';
import { Link } from "react-router-dom";
import {Hand} from './Hand.js'
import {Holdbutton} from './Holdbutton.js'
import checkHand from './handeval.js'
import {Howl} from 'howler';
import { Promise } from 'bluebird'


Promise.config({
    warnings: true,
    longStackTraces: true,
    cancellation: true,
    monitoring: true
});

var drawPromise = null;
var hunterPromise = null;
var flipPromise = null;
var winnerPromise=null;
var scorePromise = null;

const soundurls = [
  {
    name:"backbaylounge",
    src:"./sound/backbaylounge.mp3",
    loop:true,
    vol: 0.8,
  },
  {
    name:"bell1",
    src:"./sound/bell1.mp3",
  },
  {
    name:"bell2",
    src:"./sound/bell2.mp3",
  },
  {
    name:"button",
    src:"./sound/button.mp3",
  },
  {
    name:"buzz",
    src:"./sound/buzz.mp3",

  },
  {
    name:"cardflick",
    src:"./sound/cardflick.mp3",
  },
  {
    name:"cardflip",
    src:"./sound/cardflip.mp3",
  },
  {
    name:"casino",
    src:"./sound/casino.mp3",
    loop:true,
    vol:0.5,
  },
  {
    name:"laugh",
    src:"./sound/laugh.mp3",
    vol: 0.4,
  },

  {
    name:"neon",
    src:"./sound/neon.mp3",
    loop:true,
  },
];

const soundbank = {};

function createCards() {
  const cards = [];

  const suits = ['C', 'D', 'H', 'S'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  for (let suit of suits) {
    for (let value of values) {
      cards.push({
        suit,
        value,
        str: value + suit
      });
    }
  }
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  return cards;
}

let cardImagePaths = createCards().map(
  (x) => "../img/cards/"+x.str+".png"
)

export class Poker extends React.Component {
  constructor(props){
    super(props);
    this.activatePreload = this.activatePreload.bind(this);
    this.preloadAssets = this.preloadAssets.bind(this);
    this.handleMute = this.handleMute.bind(this);
    this.holdCard = this.holdCard.bind(this);
    this.freshdeck = this.freshdeck.bind(this);
    this.draw = this.draw.bind(this);
    this.flipCards = this.flipCards.bind(this);
    this.openGame = this.openGame.bind(this);
    this.startGame = this.startGame.bind(this);
    this.newGame = this.newGame.bind(this);
    this.replaceCards = this.replaceCards.bind(this);
    this.scoreHand = this.scoreHand.bind(this);
    this.declareWinner = this.declareWinner.bind(this);
    this.huntersChoice = this.huntersChoice.bind(this);
    this.startMessage = this.startMessage.bind(this);
    this.flashMessage = this.flashMessage.bind(this);
    this.listentoResize = this.listentoResize.bind(this);
    this.state = {
      loadingViewOn:true,
      loadedCount:0,
      loadingText:"Loading...",
      loading:true,
      mute:false,
      _mounted: false,
      holdButtonWidth:0,
      gameState: "startGame",
      winner: "",
      message:"whoWins",
      score: {
        hunter:0,
        player:0,
      },
      cards: [],
      hunterhand:{
        id:"h",
        flipped:[true, true, true, true, true],
        held:[true, true, true, true, true],
        cards:["AS", "AS", "AS", "AS", "AS"],
        vals:["A", "A", "A", "A", "A"],
        suits:["S", "S", "S", "S", "S"],
        float:[],
        hand:{
          desc:"",
          high:"",
          score:0,
          arr:[],
        }
      },
      playerhand:{
        id:"p",
        flipped:[true, true, true, true, true],
        held:[false, false, false, false, false],
        cards:["AS", "AS", "AS", "AS", "AS"],
        vals:["A", "A", "A", "A", "A"],
        suits:["S", "S", "S", "S", "S"],
        float:[],
        hand:{
          desc:"",
          high:"",
          score:0,
          arr:[],
        }
      },
    };
  };

  freshdeck(){
    let newcards = createCards();
    this.setState({cards: newcards})
  }

  componentWillMount(){
    this.setState({_mounted:true});
    this.freshdeck();

  }

  componentDidMount(){
    setTimeout(()=>this.activatePreload(), 500)
    if(typeof window.getComputedStyle(document.body).backgroundBlendMode == 'undefined') {
    document.getElementById('poker').className += " no-blend";
    }
  }


  componentWillUnmount(){
    this.setState({_mounted:false})
    Howler.unload()

    if(drawPromise){
      drawPromise.cancel();
    }
    if(flipPromise){
      flipPromise.cancel();
    }
    if(hunterPromise){
      hunterPromise.cancel();
    }
    if(scorePromise){
      scorePromise.cancel();
    }
    if(winnerPromise){
      winnerPromise.cancel();
    }
    clearInterval(this.state.interval)
  }


  activatePreload(){

    if (this.state.loading){
      this.preloadAssets(cardImagePaths)
        .then((img) => this.setState({loadingText:"LOADING", loading:false}), (err) => alert(err));
    }
  }

  preloadAssets(srcs) {
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

    //load sounds
    soundurls.forEach(function(current, i) {
      let name = soundurls[i].name;
      promises.push(
        new Promise(function(resolve, reject){
          if (soundbank[name]){
            resolve(true)
          }
          soundbank[name] = (
           new Howl(
              {
                src: soundurls[i].src,
                loop: soundurls[i].loop,
                volume: soundurls[i].vol,
                onend: function() {
                  if (name === "buzz"){
                    soundbank.laugh.play()
                  }
                }
              }
            )
          )
          soundbank[name].once('load', function(){
            count++;
            countup(count);
            resolve(name);
          });
          soundbank[name].once('loaderror', function(){
            reject(name);
          });
          soundbank[name].once('playerror', function(){
            reject(name);
          });
        })
      )
    });

    //load images
    for (var i = 0; i < srcs.length; i++) {
        promises.push(loadImage(srcs[i], i));
    }

    return Promise.all(promises);


  }

  openGame(mute){
    this.setState({ loadingViewOn:false, mute:mute })
    Howler.mute(mute)
    soundbank.casino.play();
    soundbank.neon.play();
    soundbank.backbaylounge.play();

  }

  handleMute(){
    Howler.mute(!this.state.mute)
    this.setState({mute:!this.state.mute})
    }

  draw(num, whom, arraymap = [true,true,true,true,true]) {

    drawPromise = new Promise((resolve, reject) => {

      arraymap.filter((x) => x==true).length == 0 ? resolve(true) : null;

      let {cards, playerhand, hunterhand} = this.state;

      let n = num ? num + 1 : 0;

      let drawnCards = n ? (cards.slice(-n)) : null;

      let newhand = whom === "player" ? playerhand : hunterhand;
      let cardStrings, cardSuits, cardVals;

      if (drawnCards){ //seperate drawn cards into separate arrays
        cardStrings = drawnCards.reduce(function(prev, curr){
          return [...prev, curr.str ]
        })

        cardSuits = drawnCards.reduce(function(prev, curr){
          return [...prev, curr.suit ]
        })

        cardVals = drawnCards.reduce(function(prev, curr){
          return [...prev, curr.value ]
        })
      }

      //remove cards from deck
      let slicedeck = n ? cards.slice(0, -num) : cards;

      //if arraymap entry is true, replace card, else return card
      newhand.cards = arraymap.map((x, i) => x ? cardStrings.pop() : newhand.cards[i]);
      newhand.suits = arraymap.map((x, i) => x ? cardSuits.pop() : newhand.suits[i]);
      newhand.vals = arraymap.map((x, i) => x ? cardVals.pop() : newhand.vals[i]);


        this.setState({cards:[...slicedeck]})
        this.setState({[`${whom}hand`]: newhand}, resolve(true))

    })

    return drawPromise

  }

  flipCards(array, whom){
    let {playerhand, hunterhand} = this.state;
    let newhand = whom === "player" ? playerhand : hunterhand;

    function playflipsound(){
      if (whom === "player"){
        soundbank.cardflip.play()
      }
    }

    flipPromise = new Promise((resolve, reject) => {

      if (!array.includes(true)){
        resolve(true)
      }

      for (let i=0; i < array.length; i++){
        let delay = 120*i;
        if(array[i]){
          setTimeout(
            () => {
              newhand.flipped[i] = !newhand.flipped[i];
              this.setState({[`${whom}hand`]: newhand}, playflipsound())
            },
            delay
          )
        }
        if(i === array.length-1){
          setTimeout(()=>resolve(true), 700)
        }

      }

    })

    return flipPromise

  }

  holdCard(card){
    let {playerhand} = this.state;
    let newhold = playerhand;
    newhold.held[card] = !newhold.held[card];
    this.setState({playerhand: newhold})
    soundbank.button.play();
  }

  scoreHand(whom){


    scorePromise = new Promise((resolve, reject) => {
      let {playerhand, hunterhand} = this.state;
      let newhandscore = whom === "player" ? playerhand : hunterhand;
      newhandscore.hand = checkHand(newhandscore);

      this.setState({[`${whom}hand`]:newhandscore}, resolve(true))

    })

    return scorePromise
  }

  startGame(){
    let {playerhand} = this.state;

    this.setState({gameState:"dealing"},
      () => this.draw(5, "player")
      .then(() => this.draw(5, "hunter"))
      .then(() => this.flipCards(playerhand.flipped, "player"))
      .then(() => this.scoreHand("player"))
      .then(() => this.scoreHand("hunter"))
      .then(() => this.huntersChoice())
      .then(() => this.setState({gameState:"chooseCards"}))
    );
  }

  replaceCards(){
    let {playerhand, hunterhand} = this.state;

    let playerdraw = playerhand.held.filter(x => !x).length
    let hunterdraw = hunterhand.held.filter(x => x).length
    let dealtoplayer = playerhand.held.map(x => !x)
    let dealtohunter = hunterhand.held.map(x => x)


    let emptyhold = playerhand;
    emptyhold.held = new Array(5).fill(false);
    let emptyhunter = hunterhand;
    emptyhunter.held = new Array(5).fill(true);
    let revealhuntercards = new Array(5).fill(true);

    this.setState({gameState:"dealing"},
      () => this.flipCards(dealtoplayer, "player")
      .then(() => this.draw(playerdraw, "player", dealtoplayer))
      .then(() => this.draw(hunterdraw, "hunter", dealtohunter))
      .then(() => this.flipCards(dealtoplayer, "player") )
      .then(() => this.scoreHand("hunter"))
      .then(() => this.setState({playerhand:emptyhold}))//undo holds
      .then(() => this.setState({hunterhand:emptyhunter}))
      .then(() => this.flipCards(revealhuntercards, "hunter"))
      .then(() => this.scoreHand("player"))
      .then(() => this.declareWinner())
      .then(() => this.setState({gameState: "winScreen"}))
    )
  }

  huntersChoice(){
    let {hunterhand} = this.state;
    const suits = ["K", "D", "C", "S"]
    let newHold = Object.assign({}, hunterhand)
    let aflush = false;

    (function almostFlush(){
      suits.forEach(
        function(suit){
          if (hunterhand.suits.filter((x) => x === suit).length == 4){
            newHold.held = newHold.suits.map((x) => x === suit )
            aflush = true;
          }
          else{
            aflush = false;
          }
        }
      )
    })() //iife because funcs in promises are weird

    hunterPromise = new Promise((resolve, reject) => {

        if(aflush){ //go for flush
          this.setState({hunterhand: newHold}, resolve(true))
        }

        if(!aflush && hunterhand.hand.desc){ //take hand
          newHold.held = newHold.hand.arr.map(x =>!x); //inverted hold
          this.setState({hunterhand: newHold}, resolve(true))

        }
        if(!aflush && !hunterhand.hand.desc){
          newHold.held = newHold.hand.arr.map(x => !x);
          this.setState({hunterhand: newHold}, resolve(true))
        }

    })

    return hunterPromise
  }

  declareWinner(){
    let {playerhand, hunterhand, score} = this.state;

    this.startMessage()
    winnerPromise = new Promise((resolve, reject) => {

      let {playerhand, hunterhand, score} = this.state;
      let newScore = Object.assign({}, score)

      let winningPlayerHand = Object.assign({}, playerhand)
      let winningHunterHand = Object.assign({}, hunterhand)
      winningHunterHand.float = winningHunterHand.hand.arr;
      winningPlayerHand.float = winningPlayerHand.hand.arr;

      function playwinsound(){
        if (Math.random() < .5){
          soundbank.bell2.play()
        }
        else{
          soundbank.bell1.play()
        }
      }

      function playlosesound(){
        soundbank.buzz.play()
      }

      if (playerhand.hand.score !== hunterhand.hand.score ){

        if(playerhand.hand.score > hunterhand.hand.score){
          newScore.player++;
          playwinsound();
          this.setState({winner:"player", score: newScore, playerhand:winningPlayerHand}, resolve(true))

        }
        else{
          newScore.hunter++;
          playlosesound();
          this.setState({winner:"hunter", score: newScore, hunterhand:winningHunterHand}, resolve(true))
        }
      }
      //if tie
      if (playerhand.hand.score === hunterhand.hand.score ){
        for (let i=0; i < 5; i++){
          if (playerhand.hand.high[i] > hunterhand.hand.high[i]){

            newScore.player++;
            playwinsound();
            this.setState({
              winner:"player", score:newScore, playerhand:winningPlayerHand
            }, resolve(true))
            return
          }
          else if(playerhand.hand.high[i] === hunterhand.hand.high[i]){

            i == 4 ? this.setState({winner:"tie"}, resolve(true)) : null;
          }
          else{

            newScore.hunter++;
            playlosesound();
            this.setState({
              winner:"hunter", score:newScore, hunterhand:winningHunterHand
            }, resolve(true))
            return
          }
        }
      }
    })

    return winnerPromise
  }

  startMessage(){
    let interval = setInterval(this.flashMessage, 1500);
    this.setState({interval:interval})
  }

  flashMessage(){
    let {message} = this.state;
    if (message === "scoreBoard"){
      this.setState({message:"whoWins"})
    }
    if (message === "whoWins"){
      this.setState({message:"scoreBoard"})
    }
  }

  newGame(){
    let {playerhand, hunterhand, winMessage} = this.state;
    let hideall = new Array(5).fill(true);
    playerhand.float = [];
    hunterhand.float = [];
    clearInterval(this.state.interval)
    this.setState({gameState:"dealing", hunterhand:hunterhand, playerhand:playerhand, winner: "", message:"whoWins"},
      () => this.flipCards(hideall, "player")
      .then(() => this.flipCards(hideall, "hunter"))
      .then(() => this.freshdeck())
      .then(() => this.draw(5, "player"))
      .then(() => this.draw(5, "hunter"))
      .then(() => this.scoreHand("player"))
      .then(() => this.scoreHand("hunter"))
      .then(() => this.huntersChoice())
      .then(() => this.flipCards(playerhand.flipped, "player"))
      .then(() => this.setState({gameState:"chooseCards"}))

    );

  };

  listentoResize(width){
    this.setState({holdButtonWidth:width})
  }



  render() {
    let {
      loadingViewOn,
      loading,
      loadedCount,
      loadingText,
      poker,
      hunterhand,
      playerhand,
      gameState,
      winner,
      score,
      message
      } = this.state;

    let assetCount = cardImagePaths.length + soundurls.length;
    let barPercentage = ((Math.ceil((loadedCount/assetCount)*100)).toString())+"%";
    let barWidth = {width:barPercentage}

    let holdButtonEnabled = {
      startGame: false,
      chooseCards: true,
      winScreen: false,
      dealing: false
    }[gameState];

    let drawButtonFunc = {
      startGame: this.startGame,
      chooseCards:  this.replaceCards,
      winScreen: this.newGame,
      dealing: null
    }[gameState];

    let scoreboardContents = [
      <div className="flex flex-row justify-center">
        <div className="ma1 pa1 pa2-ns flex flex-row justify-center bg-black-30 ba bw1 b--orange di shadow-3">
          <span className=" f5-m f7 f3-ns ttu">YOU: &nbsp;</span>
          <span className=" f5-m f7 f3-ns ttu">{"  " + score.player}</span>
        </div>
        <span className="o-50 mh2-ns mh0 flex flex-column justify-center">♣</span>
        <div className="ma1 pa1 pa2-ns flex flex-row justify-center bg-black-30 ba bw1 b--orange di shadow-3">
          <span className=" f5-m f7 f3-ns ttu">Hunter: &nbsp;</span>
          <span className=" f5-m f7 f3-ns ttu">{"" + score.hunter}</span>
        </div>
        <span className="o-50 mh2-ns mh0 flex flex-column justify-center">♠</span>
        <div className="ma1 pa1 pa2-ns flex flex-row justify-center bg-black-30 ba bw1 b--orange di shadow-3">
          <span className=" f5-m f7 f3-ns ttu">W/L: &nbsp;</span>
          <span className=" f5-m f7 f3-ns ttu">
            {"  " + (score.player/(score.hunter+score.player)*100).toFixed(1) + "%"}
          </span>
        </div>
      </div>,
      <span className="f6 f3-ns ttu tracked-mega">{winner === "hunter" ? "YOU LOSE..." : winner === "player" ? "YOU WIN!!!" : "RARE TIE! WOW!"}</span>
    ]

    let gameOverMessage = {
          whoWins: scoreboardContents[1],

          scoreBoard: scoreboardContents[0],


          //"HUNTER: " + score.hunter + " 【♣】 YOU: " + score.player +  " 【♠】 W/L: " + (score.player/(score.hunter+score.player)*100).toFixed(1) + "%",
    }[message]

    let gameMessage = {
      startGame: "PLAY THE ODDS:",

      chooseCards:  "CHOOSE YOUR CARDS:",
      winScreen: gameOverMessage,
      dealing: "Dealing..."
    }[gameState];

    let buttonMessage = {
      startGame: "DEAL",
      chooseCards:  "DRAW",
      winScreen: "DEAL",
      dealing: "DEALING..."
    }[gameState];

    let holdbuttons = this.state.playerhand.cards.map((cards, index)=>
      <Holdbutton
        key={index}
        buttonEnabled={holdButtonEnabled}
        holdCard= {() => this.holdCard(index)}
        held={playerhand.held[index]}
        width={this.state.holdButtonWidth}
      />
    );


    let steptext=[
      "Click the 'DRAW' button to receive 5 cards.", "Click the 'HOLD' buttons to choose your cards.",
    "Click the 'DEAL' button to receive new cards."
  ]

    let mobilesteptext=[
      "Tap the 'DRAW' button to receive 5 cards.",
    "Tap your cards to choose your hand.", "Tap the 'DEAL' button to receive more cards."
  ]

    let steps = steptext.map((step, index)=>
      <div key={index}className="mv2 h-auto flex flex-row justify-start relative ">
        <div className="h-100 ">
          <span
          className="white-80 b textshadow ">{index + 1})
          </span>
        </div>
        <div className="h-100">
          <p className={`mv0 f5-ns f6-m fw2 tl ml1 white-70 arrowpointer link tracked lh-copy textshadow `}>
            {step}
          </p>
        </div>
      </div>
    )

    let mobilesteps = mobilesteptext.map((step, index)=>
      <div key={index}className="mb2 h-auto flex flex-row justify-start relative ">
        <div className="h-100 ">
          <span
          className="white-80 f6 textshadow ">{index + 1})
          </span>
        </div>
        <div className="h-100">
          <p className={`mv0 f6 fw2 tl ml1 white-70 arrowpointer link tracked lh-copy textshadow `}>
            {step}
          </p>
        </div>
      </div>
    )


    return(
      <div id="poker" className=" h-100 min-h-100 w-100  flex flex-column justify-start poker poker-ns ving">
        <nav className={`w-100 h2 pv2 flex flex-row ${loadingViewOn ? "justify-end-ns" : "justify-between-ns"} justify-center z-4 relative`}>
          {!loadingViewOn &&
            <div className={`w1 h1 w2-ns h2-ns self-center mh3-ns mh1 o-70`} onClick={this.handleMute}>
              <img src={this.state.mute ? "./img/mute.svg" : "./img/unmute.svg"}/>
            </div>
          }
          <div className=" mh2 self-center nowrap">

            <Link to="/"
              className={
              `link dim white-70 f7 f5-ns helvetica dib mh3-ns mh1 tracked`
              }
            >HOME</Link>
            <Link to="/portfolio"
              className={
              `link dim white-70 f7 f5-ns helvetica dib mh3-ns mh1 tracked`
              }
            >PORTFOLIO</Link>
            <Link to="/about"
              className={
              `link dim white-70 f7 f5-ns helvetica dib mh3-ns mh1 tracked`
              }
            >ABOUT</Link>
            <Link to="/poker"
              className={
              `link dim white-70 f7 f5-ns fw8 helvetica dib mh3-ns mh1 tracked`
              }
            >POKER</Link>
          </div>
        </nav>
        {loadingViewOn &&
          <div
            className=" z-2 flex flex-column justify-center h-100 w-100"
          >
            <div
              className="self-center pa3 tc white helvetica tracked w8 mh2 flex flex-column justify-center ba bw1 br3 b--orange bg-black-40 shadow-3"
            >
              <img src="../img/hunter_neon.svg" className="w-100 self-center neon" />
              <h1 className="white-40 f5 ttu tracked-mega w-100 tc self-center mb3 mt1 arrowpointer">Feeling Lucky?</h1>
              <h3 className="orange f6 fw1-ns fw8 w-60-ns w-100 tracked-mega tc self-center mb1 arrowpointer">♠ HOW TO PLAY ♠</h3>
              <div className="bg-white-10 mb3 ph3 pv2 br3 ba b--orange b--dotted bw1 dn-l">{mobilesteps}</div>
              <div className="bg-black-30 mb3 mh3 ph3 pv2 br3 dn db-l w6 shadow-3 ba bw1 b--black-40">{steps}</div>
              <h3 className="orange f6 fw1-ns fw8 w-60-ns w-100 tracked-mega tc self-center mb1 arrowpointer">♥ CLICK TO PLAY ♥</h3>
              {loading &&
                <div
                  className=" flex flex-column justify-center center h3-ns h2 w-two-thirds-ns w-100 mv3 self-center ba b--orange br3 bw1 bg-white-10 bg-white-hover grow pointer relative"
                >
                  <p className="z-4 ">
                    {this.state.loadingText}
                    {loading && " .... " + barPercentage}
                  </p>
                  {loading &&
                    <div
                      className="h-100 absolute bg-orange br3 top-0 left-0 z-0"
                      style={barWidth}
                    />
                  }
                </div>
              }
              {!loading &&
                <div className="mh3 flex flex-row justify-around mb3 pa3 br3 bg-black-30 shadow-3 ba bw1 b--black-40">
                  <div
                    className="ph2 ph4-l ph3-m pv3-ns h3 mh2 flex flex-column justify-center w-100 ba b--orange br3 bw1 bg-white-10 bg-white-hover grow pointer relative"
                    onClick={()=> this.openGame(false)}
                  >
                    <span className="z-4 ">
                      SOUND
                    </span>
                  </div>
                  <div
                    className="ph2 ph4-l ph3-m pv3-ns h3 mh2 flex flex-column justify-center w-100 ba b--orange br3 bw1 bg-white-10 bg-white-hover grow pointer relative lh-copy"
                    onClick={()=> this.openGame(true)}
                  >
                    <span className="z-4 ">
                      NO SOUND
                    </span>
                  </div>
                </div>
              }
            </div>
          </div>
        }

        {!loadingViewOn &&
          <div className="w-100 h-95 flex flex-column justify-center">
            <div className=" h-100 h-60-xl w-40-xl w-50-l w-60-m w-100 flex flex-column justify-between self-center">
              <div className="h-50 flex flex-column justify-between">
                <div className="h-55-ns h-50 z-2" >
                  <Hand
                    hand={hunterhand}
                    enableClick={false}
                  />
                </div>
                <div className="h-45 flex flex-column justify-around items-center">
                  <img src="../img/hunter_neon.svg" className="w-70-l w-70-xl w-100 neon z-2" />

                  <h1 className=" z-2 h3 f5 f3-ns white b helvetica tracked ma0 tc flex flex-column justify-center">{gameMessage}</h1>
                </div>
              </div>
              <div className="h-50  flex flex-column justify-between">
                <div className="h-10 flex flex-column justify-center">
                  <h3 className="z-2 tc orange helvetica f6 ma0 tracked-mega">{playerhand.hand.desc}</h3>
                </div>
                <div className="h-55-ns h-50 z-2" id ="hand-container">
                  <Hand
                    hand={playerhand}
                    holdCard={this.holdCard}
                    enableClick={holdButtonEnabled}
                    echoSize={(param) => this.listentoResize(param)}
                  />
                </div>
                <div className="z-2 h-10 w-100 dn flex-ns flex-row justify-center">
                  {holdbuttons}
                </div>
                <div className="h-25-ns h-35  pa3-ns pa1 flex flex-row justify-center">

                  <div
                    className={` self-center z-2 h3 w-90 h-90-ns h-70 ba bw1 bw2-ns br3 tc f3-ns f6 b helvetica flex flex-column justify-center tracked-mega ${ gameState != "dealing" ? " b--orange  orange bg-white-20 grow pointer bg-white-hover" :" b--gray gray arrowpointer"}`
                    }
                    onClick={() => {
                      soundbank.button.play();
                      drawButtonFunc()}}
                  >
                    {buttonMessage}
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
