import React from 'react';
var $ = require('jquery');
var resume = require('../resume/resume.json');

import TOC from './TOC';
import Intro from './Intro';


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
          return (
            <Intro key={`section${i+1}`} id={`section${i+1}`} resume={resume}/>
          )
        })}*/}

      </div>
    );
  }
};


// ReactDOM.render(<MainApp/>, document.querySelector("#myApp"));