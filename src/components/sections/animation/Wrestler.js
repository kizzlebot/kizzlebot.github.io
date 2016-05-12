import React from 'react';
import InlineCss from "react-inline-css";

var $ = require('jquery');
var style = require('!raw!sass!stylesheets/wrestler.scss');


export default class Wrestler extends React.Component {
  render(){
    return (
      <InlineCss stylesheet={style}>
        <section className="w">
          <div className="w-head">
            <i className="w-eye"></i>
            <i className="w-eye w-eye_right"></i>
          </div>
          <div className="w-arm"></div>
          <div className="w-arm w-arm_right"></div>
          <div className="w-leg">
            <div className="w-leg-top"></div>
            <div className="w-leg-bottom">
              <div className="w-heel"></div>
              <div className="w-shoelace"></div>
              <div className="w-shoelace"></div>
            </div>
          </div>
          <div className="w-leg w-leg_right">
            <div className="w-leg-top"></div>
            <div className="w-leg-bottom">
              <div className="w-heel"></div>
              <div className="w-shoelace"></div>
              <div className="w-shoelace"></div>
            </div>
          </div>
          <div className="w-body">
            <div className="w-body-skin"></div>
            <div className="w-body-nipples"></div>
          </div>
        </section>
      </InlineCss>
    )
  }
}
