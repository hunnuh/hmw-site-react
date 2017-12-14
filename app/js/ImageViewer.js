import React, { Component, PropTypes } from 'react';
import ImageItem from './ImageItem.js';
import ImageThumb from './ImageThumb.js';
import CodingItem from './CodingItem.js';
import VideoItem from './VideoItem.js'
import PortfolioWelcome from './PortfolioWelcome.js'


export default class ImageViewer extends Component {
  constructor(props) {
    super(props);

    this.handleImgTransition = this.handleImgTransition.bind(this);
    this.handleSetTransition = this.handleSetTransition.bind(this);
    this.keyPressHandler = this.keyPressHandler.bind(this);
    this.openImgViewer = this.openImgViewer.bind(this);
    this.closeImgViewer = this.closeImgViewer.bind(this);
    this.goHome = this.goHome.bind(this);
    this.listenerAdded;

    this.length = this.props.images.length - 1;
    this.state = { currentSetIndex: 7, currentImgIndex:0, viewerOn: false, loading: true, color:"orange"};
  }

  componentDidMount() {
    if (document) {
      this.listenerAdded = true;
      document.addEventListener('keydown', this.keyPressHandler);
    }
  }

  componentWillUnmount() {
    if (document) {
      document.removeEventListener('keydown', this.keyPressHandler);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.length = this.props.images.length - 1;
    if (this.props.mobileSet !== prevProps.mobileSet){
      this.setState(() => {
        return { currentImgIndex: 0};
      });
    }
  }

  keyPressHandler(e) {
    e.stopPropagation();
    this.handleKeyPress(e.keyCode);
  }

  handleImgTransition(direction) {
    let {images} = this.props;
    let {currentSetIndex} = this.state;
    let imageset = images[currentSetIndex];
    let length = imageset.length -1;

    if (direction === 'prev' && this.state.currentImgIndex > 0) {
      this.setState((prevState, prevProps) => {
        return { currentImgIndex: prevState.currentImgIndex - 1};
      });
    }
    else if (direction === 'prev' && this.state.currentImgIndex === 0) {
      this.setState((prevState, prevProps) => {
        return { currentImgIndex: length};
      });
    }
    else if (direction === 'next' && this.state.currentImgIndex !== length) {
      this.setState((prevState, prevProps) => {
        return { currentImgIndex: prevState.currentImgIndex + 1};
    });
  }
    else if (direction === 'next' && this.state.currentImgIndex === length) {
      this.setState((prevState, prevProps) => {
        return { currentImgIndex: 0};
      });
    }
  }

  handleSetTransition(index, color, background){
    let {changeLook} = this.props;
    changeLook(color, background);

    this.setState(() => {
      return { currentSetIndex: index, currentImgIndex:0, viewerOn:false,  color:color};
    });

    //put the divs back to the top
    let gall = document.getElementById('scroll-gallery')
    let gallSmall = document.getElementById('scroll-gallery-small')
    let blurb = document.getElementById("blurb")

    if (gall !== null){
      gall.scrollTop = 0
    }
    if (gallSmall !== null){
      gallSmall.scrollTop = 0
    }
    if (blurb !== null){
      blurb.scrollTop = 0
    }


  }

  goHome(){
    let {changeLook} = this.props;
    this.setState(() => {
      changeLook("orange", "woven")
      return { currentSetIndex: 7, currentImgIndex:0, viewerOn:false};
    });
  }

  openImgViewer(index){
    this.setState(() => {
      return {currentImgIndex:index, viewerOn:true};
    });
  }

  closeImgViewer(){
    this.setState(() => {
      return {viewerOn:false};
    });
  }

  handleKeyPress(keycode) {
    if (keycode === 37) {
      this.handleImgTransition('prev');
    } else if (keycode === 39) {
      this.handleImgTransition('next');
    } else if (keycode === 27) {
      this.props.handleClose();
    }
  }

  render() {
    let {viewerOn} = this.state;
    let {images} = this.props;
    let {blurbs} = this.props;

    let {currentSetIndex} = this.state;
    let {currentImgIndex} = this.state;
    let blurb = blurbs[currentSetIndex];
    let {color} = this.props;
    let {mobileSet} = this.props;
    let imageset = images[currentSetIndex];
    let imgsetlength = imageset.length;
    let buttonstyles = " dib mv2-ns mh2 mh0-ns helvetica fw2 ph2-ns ph3 w4 w-100-ns h-10-ns h-100 ba bw2 br2 tc shadow-1 pointer flex flex-column justify-center"

    let thumbnails = imageset.map((image, index)=>
      <ImageThumb
        key={index}
        src={image.src}
        title={image.title}
        date={image.date}
        color={this.state.color}
        onOpen={() => this.openImgViewer(index)}
        hoverButton={image.hover}
      />
    )

    let paras = blurbs[currentSetIndex].paras.map((p, index)=>
      <p key={index} className="f7 f5-ns f6-m lh-copy tracked textshadow ">{p}</p>
    )

    let highlights = blurbs[currentSetIndex].highlights.map((highlight, index)=>
    <div
      key={index}
      className="mv3 h-auto flex flex-row justify-start relative "
    >
      <div className="h-100">
        <span
        className="white b textshadow ">►
        </span>
      </div>
      <div className="h-100">
        <p
          key={index}
          className={`mv0 f6 fw4 ml3 white arrowpointer link tracked-mega lh-copy hover-${color} textshadow `}
        >
          {highlight}
        </p>
      </div>
    </div>

    )

    let navtextcolors = {"purple":true, "csun-red":true, "nms-blue":true, "orange":true} //turns white


    let textcolors = {"yellow":true, "terminal-green":true, "light-silver":true}

    return (
      <div className="flex flex-row-ns flex-column justify-center content-stretch h-100 ">
        <div className={`flex flex-row-ns flex-column justify-center w5-ns h-100-ns h-10 bg-black-50 br-ns b--${color} bw2-ns bw1 shadow-3 z-2`}>
          {/*buttonnav*/}
          <ul className="list di ma0 nowrap f3-l f5 white w-90-ns h-100 h-90-ns overflow-x-scroll overflow-y-hidden orangescrollsmall overflow-x-hidden-ns flex flex-row flex-column-ns pv2 ph1 pa1-ns" >
            <li className="dn db-ns tc pointer w-100-ns center " onClick={this.goHome} >
              <img className=" w4 w-100-ns mt2-ns" src="../img/hmw_logo_w.svg"/>
              <p className="f7 helvetica tc ma0 pa0 tracked-mega flex-ns flex-row justify-between ">
                <span className="">P</span>
                <span className="">O</span>
                <span className="">R</span>
                <span className="">T</span>
                <span className="">F</span>
                <span className="">O</span>
                <span className="">L</span>
                <span className="">I</span>
                <span className="">O</span>
              </p>
            </li>
            <hr className="dn db-ns w-100"/>
            <li
              className={`${currentSetIndex == 9 ?
                          "bg-terminal-green black  fw7 "
                          : " grow white"}
                           ${buttonstyles} b--${color}`}
              onClick={
                () => this.handleSetTransition(9, "terminal-green", "grid")
              }
            >
              CODING
            </li>
            <li
              className={`${currentSetIndex == 4 ?
              "bg-green white  fw7 "
              :  " grow white"}
              ${buttonstyles} b--${color}`} onClick={
                () => this.handleSetTransition(4, "green", "diag")
              }
            >
              WEBSITES
            </li>
            <li
              className={`${currentSetIndex == 1 ?
                          "bg-nms-blue white  fw7 "
                          :  " grow white"}
                          ${buttonstyles} b--${color}`}
              onClick={
                () => this.handleSetTransition(1, "nms-blue", "tris")
              }
            >
              NewsMaker
            </li>
            <li
              className={`${currentSetIndex == 0 ?
              "bg-csun-red white  fw7 "
              :  " grow white"}
               ${buttonstyles} b--${color}`}
              onClick={
                () => this.handleSetTransition(0, "csun-red", "csun")
              }
            >
              CSUN
            </li>
            <li
              className={`${currentSetIndex == 8 ?
              "bg-light-silver black  fw7 "
              :  " grow white"}
               ${buttonstyles} b--${color}`}
              onClick={
                () => this.handleSetTransition(8, "light-silver", "circles")
              }
            >
              VIDEO
            </li>

            <li
              className={`${currentSetIndex == 2 ?
            "bg-csun-red white  fw7 "
            :  " grow white"}
            ${buttonstyles} b--${color}`} onClick={
              () => this.handleSetTransition(2, "csun-red", "burst")
            }
            >
              ACASOLA
            </li>
            <li
              className={`${currentSetIndex == 5 ?
                "bg-orange white  fw7 "
                :  " grow white"}
                ${buttonstyles} b--${color}`}
              onClick={
                () => this.handleSetTransition(5, "orange", "trees")
              }
            >
              SELFIES
            </li>
            <li
              className={`${currentSetIndex == 3 ?
              "bg-purple white  fw7 "
              :  " grow white"}
              ${buttonstyles} b--${color}`}
              onClick={
                () => this.handleSetTransition(3, "purple", "geo")
              }
            >
              OTHER
            </li>


          </ul>
        </div>
        <div id="content-container" className="flex flex-row justify-center w-100 h-100 pa0 ">
          {!viewerOn && currentSetIndex == 7 ?
            <PortfolioWelcome/> : ""
          }
          {/*picture viewer*/}
          {viewerOn &&
            <div className=" flex flex-column justify-end h-100 w-100 bg-white-10 pa2 items-center self-center ">
              <div className="w-100 h2 center">
                <img
                  className="di w1 fr grow pa2 ba b--white bg-white-hover shadow-3 mr3"
                  onClick={() => this.closeImgViewer()}
                  src="../img/xmark.svg"
                />
              </div>
              <div className="w-100 pa2 h-100 flex flex-row justify-center ">
                {currentSetIndex == 9 ? //what kind of asset to serve
                  <CodingItem
                    key={imageset[currentImgIndex].src}
                    src={imageset[currentImgIndex].src}
                    title={imageset[currentImgIndex].title}
                    desc={imageset[currentImgIndex].desc}
                    date={imageset[currentImgIndex].date}
                  />
                : currentSetIndex == 8 ?
                  <VideoItem
                    key={imageset[currentImgIndex].src}
                    src={imageset[currentImgIndex].src}
                    vid={imageset[currentImgIndex].vid}
                  />
                :
                <ImageItem
                  className="maxh-75"
                  key={imageset[currentImgIndex].src}
                  src={imageset[currentImgIndex].src}
                />
                }
              </div>
              <div
                className="flex flex-row w5 justify-between items-center h3 mv1"
              >
                <img className="di mw2 pa1 grow shadow-3 ba b--white bg-white-hover" onClick={() => this.handleImgTransition('prev')} src="../img/leftarrow.svg"/>
                <p className="f5 white helvetica tc tracked hmw-shadow">{currentImgIndex + 1}/{imgsetlength}</p>
                <img className="di mw2 pa1 grow shadow-3 ba b--white bg-white-hover" onClick={() => this.handleImgTransition('next')} src="../img/rightarrow.svg"/>
              </div>
              {currentSetIndex != 9 &&
                <div className="w-100 mv0 ba br2 b--black flex flex-column justify-center h4 bg-black-50">
                  <p className="white f2-ns f4 helvetica mv1 mh3 mh4-ns hmw-shadow">
                    {imageset[currentImgIndex].title}
                    <span className="gray f4-ns f6"> &nbsp; //  {imageset[currentImgIndex].date}</span>
                  </p>
                  <p className="white f5-ns f6 helvetica mv0 mh3 mh4-ns tracked textshadow">{imageset[currentImgIndex].desc}</p>
                </div>
              }
            </div>
          }
          {/*thumb gallery*/}
          {!viewerOn && currentSetIndex !== 7 ?
            <div id="scroll-gallery-small" className="w-100 h-100 flex flex-column justify-start flex-row-ns justify-left-ns overflow-y-scroll overflow-y-hidden-ns overflow-x-hidden orangescrollsmall">
              <div className={`db flex-ns flex-column justify-between bg-white-30 shadow-3  h-100-ns w-third-ns w-50-m w-100  b--${color} bw1 pa3 pa4-ns pa3-m white helvetica`}>
                <div className="flex flex-column justify-between">
                  <div className="dn-ns w-100 h3 mv2">
                    <p className={`tracked pv3 mv0 w5   ${color=="purple"?"light-purple":color} ba bw1 b--${color}
              ${textcolors[color]?"":"bg-white"} br3 helvetica f4 center tc `}> Swipe Up </p>
                  </div>
                  <h1 className={` bg-${color} f3 f2-ns ${textcolors[color] ? "black" : "white"}  mv0 pa3 br-ns ba bw1 shadow-3 arrowpointer `}>{blurb.title}</h1>
                  <h3
                    className={`f5 fw1 mh4 mv3 i tracked white textshadow arrowpointer `}
                  >
                    // {blurb.subtitle}
                  </h3>
                  <div id="blurb" className="h5-ns bg-black-10 ph3 overflow-y-scroll-ns orangescrollsmall br2 arrowpointer ">
                    {paras}
                  </div>
                  <div className="mv3">
                    {highlights}
                  </div>
                </div>
                <div className="flex flex-column justify-center bg-black-40 br3 pa3 ba bw1 b--black-10 shadow-3">
                  <img
                    src="../img/fingerup.svg"
                    className="dn db-ns w-30 w-20-m center mv3-l mv2 hmw-shadow flipfinger "
                  />
                  <h1 className="f5 mv1 tc hmw-shadow tracked arrowpointer ">
                    <span className="dn  di-l ">Click</span><span className="di dn-l ">Tap</span> a thumbnail <span className="di dn-l ">below</span> to get a close-up.
                  </h1>
                </div>
              </div>
              <div className="w-50-m w-two-thirds-ns w-100 h-100-ns pa1 relative">
                <div id="scroll-gallery" className="relative w-100 h-100-ns overflow-y-scroll-ns flex flex-row flex-wrap content-start justify-around orangescroll ">
                  <div className="dn db-ns w-100 h mb1">
                    <p className={`tracked pv3 mb1 w5 ${color=="purple"?"light-purple":color} helvetica f3 floating-small center tc bg-black-30 ba b--${color} bw1 br3 arrowpointer `}>🡇 Scroll Down 🡇</p>
                  </div>
                  {thumbnails}
                </div>
              </div>
            </div>
          : ""
          }
        </div>
      </div>
    );
  }
}
