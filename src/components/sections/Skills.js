import React from 'react';

var $ = require('jquery');
import Computer from './animation/Computer';
import SectionWrap from './SectionWrap';

export default class Skills extends React.Component {
  render(){
    return (
      <SectionWrap {...this.props}>
        <h1></h1>
        <Computer />
      </SectionWrap>
    )
  }
}
