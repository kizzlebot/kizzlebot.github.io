import React from 'react';
var $ = require('jquery');
var resume = require('../resume/resume.json');

import TOC from './TOC';


 import {Experience, Intro, Activity, Skills, Tech} from './sections';




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
    var excludes = ['references', 'languages'];
    var sections = Object.keys(resume).reduce((prev, curr) => {
      if (curr[0] == '_' || excludes.indexOf(curr) != -1) return prev ;
      return prev.concat([{ title:curr, caption:resume._captions[curr] }]);
    }, []).concat([{title:'Built using', caption: 'Technologies used'}]);

    return (
      <div className="wrapper">
        <TOC sections={sections} />
        <Intro key={`section${1}`} id={`section${1}`} />
        <Experience key={`section2`} id={`section${2}`} resume={resume}/>
        <Activity key={`section3`} id={`section${3}`} />
        <Skills key={`section4`} id={`section${4}`} />
        <Tech key={`section5`} id={`section${5}`} />
      </div>
    );
  }
};


// ReactDOM.render(<MainApp/>, document.querySelector("#myApp"));
