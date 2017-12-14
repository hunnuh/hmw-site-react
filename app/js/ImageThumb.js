import React, { Component } from 'react';

class ImageThumb extends Component {


  render() {
    let {color} = this.props;
    return (
      <div
        onClick={this.props.onOpen}
        className={`${this.props.hoverButton ? " hoverplay " : ""} relative select-orange maxh-40 h-40 w-40-ns w-80-m minw-5 mv2 mh1 flex flex-column items-center justify-end hoverlink  pa2 br3 bw1 pointer`}

      >
        <img
          key={this.props.src}
          onLoad={this.props.imageLoaded}
          onError={this.props.imageError}
          src={this.props.src}
          onClick={this.props.onOpen}
          className={`img h-auto maxh-80 ba bw2 b--black bh-${color} br2 shadow-3 thumb pointer select-orange bw1 loader contain bg-center`}
        />
        <h2 className="mb0 f4 f5-m fw5 ttu tracked mt2 white-80 courier tc pointer select-orange dontwrap"
          onClick={this.props.onOpen}>{this.props.title}</h2>
        <h2 className="mb0 f4 f5-m fw1 mt0 white-30 courier select-orange">☼ {this.props.date} ☼</h2>
      </div>
    );
  }
}

export default ImageThumb;
