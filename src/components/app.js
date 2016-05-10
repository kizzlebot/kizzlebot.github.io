import React from 'react';
var $ = require('jquery');
var resume = require('../resume/resume.json');

import TOC from './TOC';


import Experience from './Experience';
import Intro from './Intro';
import Activity from './Activity';
import Skills from './Skills';




export default class App extends React.Component {
  constructor(props, context){
    super(props, context);
  }
  static childContextTypes = {
    resume: React.PropTypes.object
  };
  getChildContext () {
    return {resume:resume};
  }


  componentWillMount(){
    this.setState(resume);
  }

  render() {
    var sections = Object.keys(resume).reduce((prev, curr) => prev.concat([{ title:curr }]), []);

    return (
      <div className="wrapper">
        <TOC sections={sections} />
        <Intro key={`section${1}`} id={`section${1}`} />
        <Experience key={`section2`} id={`section${2}`} />
        <Activity key={`section3`} id={`section${3}`} />
        <Skills key={`section4`} id={`section${4}`} />
      </div>
    );
  }
};


// ReactDOM.render(<MainApp/>, document.querySelector("#myApp"));
