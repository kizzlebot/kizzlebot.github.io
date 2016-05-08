require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack');
require('./stylesheets/styles.scss');

import React from 'react';
import ReactDOM from 'react-dom';
var $ = require('jquery');

var resume = require('./resume/resume.json');


export default class MainApp extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state = {
      basics:[], education:[], skills: []
    };
  }
  componentWillMount(){
    this.setState(resume);
  }
  componentDidMount(){
    Object.keys(resume).forEach((e, i) => {
      $(this.refs[`toc-${i}`]).click(function(){
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
      })
    })
  }
  render() {
    var TOC = Object.keys(resume).map((e, i) => {
      return (
        <li key={`toc-${i}`} role="presentation" className={(i == 0) ? 'active': ''}>
          <a href={`#section${i+1}`} ref={`toc-${i}`}>
            <span className="nav__counter">0{`${i+1}`}</span>
            <h3 className="nav__title">{`${e}`}</h3>
            <p className="nav__body">
              <strong>Timeline-style navigation</strong>.
                Scroll down to see what happens, or click on a number in the nav.
            </p>
          </a>
        </li>
      )
    });
    console.log(resume);
    return (
      <div className="wrapper">
        <nav className="nav__wrapper" id="navbar-example">
          <ul className="nav">
            {TOC}
          </ul>
        </nav>
        {Object.keys(this.state).map((e, i) => {
          return (
            <section key={`section${i+1}`} className={`section section${i+1}`} id={`section${i+1}`}>
              {'k'}
            </section>
          )
        })}

      </div>
    );
  }
};


ReactDOM.render(<MainApp/>, document.querySelector("#myApp"));
