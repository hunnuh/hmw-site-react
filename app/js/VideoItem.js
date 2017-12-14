import React, { Component } from 'react';

class VideoItem extends Component {


  render() {
    let {vid} = this.props;
    let container = document.getElementById("content-container");
    let videoheight = null;
    let videowidth = null;
    if (container.clientHeight > container.clientWidth){
        videowidth = Math.ceil(container.clientWidth*.9);
        videoheight = Math.ceil((videowidth*.5625))
    }
    else{
      videoheight = Math.ceil(container.clientHeight*.55);
      videowidth = Math.ceil((videoheight/56.25)*100)
    }

    return (
      <div className="h-100 flex flex-column justify-center select-orange center loader bg-center ">
        <div >
          <div >
            <iframe
              allowFullScreen='allowFullScreen'
              src={"https://www.youtube.com/embed/"+vid+"autoplay=1&autohide=3&fs=1&iv_load_policy=3&rel=0&showsearch=0"}
              width={videowidth}
              height={videoheight}
              allowTransparency="true"
              frameBorder="0"
            />
          </div>
        </div>
        {/* <img
          key={this.props.src}
          onLoad={this.props.imageLoaded}
          onError={this.props.imageError}
          src={this.props.src}
          className="siv-image img shadow-3 ba b--black center maxh-100 mw-100"
        /> */}
      </div>
    );
  }
}

export default VideoItem;
