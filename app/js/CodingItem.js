import React, { Component } from 'react';


class CodingItem extends Component {


  render() {
    let {src, title, desc, date} = this.props;
    let links = desc.tech.map((tech, index)=>
      <li key={index} className="ba f4 bw1 b--black bg-black-30 br3 dib pa2-ns pv0 ph2 grow pointer mr2 ml0 mv1"><a  target="_blank" href={tech.link} className={`f7 f4-ns link ${tech.color} b no-underline `}>{tech.name}</a></li>
    )

    let paras = desc.p.map((p, index)=>
      <p key={index} className="f5-ns f7 lh-copy-ns tracked">{p}</p>
    )

    return (
      <div className=" w-100 h-100 flex flex-row justify-center select-orange ">
        <div className="dn w-50 h-100 flex-ns flex-column justify-center pa1 relative">
          <img
            key={src}
            src={src}
            className="shadow-3 ba b--black center img h-auto w-auto maxh-100 loader bg-center"
          />
        </div>
        <div className="w-50-ns w-100 h-100 flex flex-column justify-center pa3-ns pa1 white helvetica">
          <div className="relative bg-dark-gray ba bw1 b--black br3 shadow-3 pa3-ns pa2 h-100 hmwbg contain repeat-y overflow-x-hidden overflow-y-scroll orangescroll">

            <div className="dn-ns w-100 w-50-ns h-100-ns h-auto flex flex-column justify-center pa1 relative">
              <img
                key={src}
                src={src}
                className="shadow-3 ba b--black center img h-auto w-auto maxh-100 loader bg-center"
              />
            </div>

            <h1 className="f1-ns f3 mv0-ns mv2">
              {title}
              <span className="gray f4 di"> &nbsp; //  {date}</span>
            </h1>
            <hr className="mb3"/>
            <ul className="list pa0">{links}</ul>
            <div>{paras}</div>
            {desc.plug &&
              <a className="dn db-ns f4 orange tracked dim link b"      href={desc.plug.link}
              >{desc.plug.text}
              </a>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default CodingItem;
