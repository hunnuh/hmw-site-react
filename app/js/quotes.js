import React from 'react';

const quotes = [
  {
    quote: "\"Many of the truths we cling to <i>depend greatly on our own point of view.</i>\"",
    cred: "<i>~Obi-Wan Kenobi, </i> \"RETURN OF THE JEDI\""
  },
  {
    quote: "\"We are all apprentices in a craft where <i>no one ever becomes a master.</i>\"",
    cred: "<i>~Ernest Hemingway, </i> \"THE WILD YEARS\""
  },
  {
    quote: "\"I do mind, the Dude minds. This will not stand, ya know, this aggression will not stand, man!\"",
    cred: "<i>~The Dude, </i> \"THE BIG LEBOWSKI\""
  },
  {
    quote: "\"We’re like the dreamer who dreams and then lives inside the dream. <i>But who is the dreamer?</i> \"",
    cred: "<i>~David Lynch, </i> \"TWIN PEAKS\""
  },
  {
    quote: "\"But that's the way I like it, baby, <i>I don't want to live forever.</i> \"",
    cred: "<i>~Motörhead, </i> \"ACE OF SPADES\""
  },
  {
    quote: "\"Give me six hours to chop down a tree, and <i>I'll spend the first four sharpening the axe.</i> \"",
    cred: "<i>~Anonymous Lumberjack</i>"
  },
  {
    quote: "\"You have the look of a man who accepts what he sees <i>because he is expecting to wake up.</i> \"",
    cred: "<i>~Morpheus, </i> \"THE MATRIX\""
  },
  {
    quote: "\"One little boy, one little man, funny how time flies...\"",
    cred: "<i>~Tears For Fears </i> \"HEAD OVER HEELS\""
  },
  {
    quote: "\"<i>Be excellent to each other,</i> and party on, dudes!\"",
    cred: "<i>~Abraham Lincoln, </i> \"B&TEA\""
  },
  {
    quote: "\"I find that a ducks's opinion of me is very much influenced by <i>whether or not I have bread.</i>\"",
    cred: "<i>~Mitch Hedberg </i>"
  },

]

const browserQuote = {
  quote: "\"Please use a modern browser like Chrome or Firefox to browse my site. <i>Edge and Explorer are woefully unequipped.</i>\"",
  cred: "<i>~ HMW</i>"
}


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const int = getRandomInt(0, quotes.length);

const quoteinterval = null;

const QuoteView =({quote, cred, flash}) => (
  <div className="flex flex-column items-center">
    <div>
      <p className={`${flash ? "quoteflash " : ""} white-80 white-10-ns f4 f3-ns f2-xl tc bodoni self-center mt4 mt5-ns mb0 ph4 hmw-shadow select-orange`}
        dangerouslySetInnerHTML={{__html:quote}}/>
      <p className={`${flash ? "quoteflash " : ""} white-40 grey-ns tr fr mr5-ns mr3 f6 f4-xl bodoni hmw-shadow select-orange`}
        dangerouslySetInnerHTML={{__html:cred}}/>
    </div>
  </div>
);

export class Quote extends React.Component {
  constructor(props){
    super(props);
    this.state = {counter:null, quote: null, browser: true};
  }

  componentDidMount() {

  if (typeof window.getComputedStyle(document.body).backgroundBlendMode ==  'undefined') {
    console.log("BAD BROWSER DETECTED")
    this.setState({browser:false})
  }
  if (this.state.browser){
    const int = getRandomInt(0, quotes.length);
    this.setState({counter:int, quote: quotes[int]});

    this.quoteinterval = setInterval(() => {
      if(this.state.counter === (quotes.length - 1)){
        this.setState(() => ({
          counter:0,
          quote:quotes[0]
        }));
      }
      else{
        this.setState((prevState) => ({
          counter:prevState.counter + 1,
          quote:quotes[prevState.counter + 1]
        }));
      };
    }, 7000);
  }


  }

  componentWillUnmount() {
    clearInterval(this.quoteinterval);
  }

  render() {
    let {browser} = this.state
    return(
      <div>
        {browser &&
          <QuoteView {...this.state.quote} flash={true} />
        }
        {!browser &&
          <QuoteView {...browserQuote} flash={false} />
        }
      </div>
    )
  }
}
