
import React from 'react';
var $ = require('jquery');
var resume = require('../resume/resume.json');
import TOC from './TOC';


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

    var sections = Object.keys(resume).reduce((prev, curr) => prev.concat([{ title:curr }]), []);

    return (
      <div className="wrapper">
        <TOC sections={sections} />

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


// ReactDOM.render(<MainApp/>, document.querySelector("#myApp"));
