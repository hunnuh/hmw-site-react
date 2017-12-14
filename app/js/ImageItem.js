import React, { Component } from 'react';

class ImageItem extends Component {


  render() {
    return (
      <div className="flex flex-column justify-center  loader bg-center">
        <img
          key={this.props.src}
          src={this.props.src}
          className="siv-image img shadow-3 ba b--black center h-auto w-auto maxh-100"
        />
      </div>
    );
  }
}
export default ImageItem;
