import React from 'react';
import SectionWrap from './SectionWrap';
var $ = require('jquery');
var ReactLogo = require('./animation/react_logo');
import WebpackLogo from './animation/webpack_logo'


export default class Tech extends React.Component {
  componentDidMount(){
  }
  render(){
    // console.log(this.props.sections);
    var logProps = {
    };
    return (
      <SectionWrap {...this.props}>
        <div className='col-xs-6'>
        <ReactLogo {...logProps} />
        </div>
        <div className='col-xs-6'>
        <WebpackLogo {...logProps} />
        </div>
      </SectionWrap>
    )
  }
}
