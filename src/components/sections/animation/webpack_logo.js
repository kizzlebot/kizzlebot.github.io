import React from 'react';
var $ = require('jquery');
var moment = require('moment');
import 'stylesheets/webpack_logo.scss';




export default class WebpackLogo extends React.Component {
  render(){
    return (
      	<div className="logo">
      		<ul className="cube-inner">
      			<li className="front"></li>
      			<li className="back"></li>
      			<li className="right"></li>
      			<li className="left"></li>
      			<li className="top"></li>
      			<li className="bottom"></li>
      		</ul>
      		<ul className="cube">
      			<li className="front"></li>
      			<li className="back"></li>
      			<li className="right"></li>
      			<li className="left"></li>
      			<li className="top"></li>
      			<li className="bottom"></li>
      			<li className="floor"></li>
      		</ul>
	     </div>
    )
  }
}
