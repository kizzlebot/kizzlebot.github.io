import React from 'react';
import SectionWrap from './SectionWrap';
var $ = require('jquery');
var ReactLogo = require('./animation/react_logo');


export default class Tech extends React.Component {
  componentDidMount(){
  }
  render(){
    // console.log(this.props.sections);
    var logProps = {
    };
    return (
      <SectionWrap {...this.props}>
        <ReactLogo {...logProps} />
      </SectionWrap>
    )
  }
}
