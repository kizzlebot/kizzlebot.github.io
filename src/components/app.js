import React from 'react';
var $ = require('jquery');
var resume = require('../resume/resume.json');

import TOC from './TOC';
import Experience from './Experience';
import Intro from './Intro';
import Activity from './Activity';

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

  render() {

    var sections = Object.keys(resume).reduce((prev, curr) => prev.concat([{ title:curr }]), []);

    return (
      <div className="wrapper">
        <TOC sections={sections} />
        <Intro key={`section${1}`} id={`section${1}`} resume={resume}/>
        {/*{Object.keys(this.state).map((e, i) => {
          return (*/}

            <Experience key={`section2`} id={`section${2}`} resume={resume}/>
            <Activity key={`section3`} id={`section${3}`} resume={resume}/>

          {/*)
        })}*/}

      </div>
    );
  }
};


// ReactDOM.render(<MainApp/>, document.querySelector("#myApp"));
