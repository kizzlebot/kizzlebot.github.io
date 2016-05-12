import React from 'react';
var $ = require('jquery');
import SectionWrap from './SectionWrap';
require(`/Users/kizzlebot/Documents/Developer/kizzlebot.github.io/node_modules/guaw-dev/dist/js/jquery.guaw.min.js`);

var moment = require('moment');

export default class Education extends React.Component {
  componentDidMount(){
    $(this.refs.github).guaw({
      username:'kizzlebot',
      timeout:1800,
      debug:false
    });
  }
  render(){
    return (
      <SectionWrap {...this.props}>
        <ul>
          {this.context.resume.education.map((e) => {
            return (
              <li key={'education'+e.institution} className={'education'}>
                {e.institution}
                <ul>
                  <li>{e.area} ({e.studyType})</li>
                  <li>{moment(e.startDate).format('MM/YYYY')} - {(e.endDate)? moment(e.endDate).format('MM/YYYY') : 'current'}</li>
                </ul>
              </li>
            );
          })}

        </ul>
      </SectionWrap>
    )
  }
}

Education.contextTypes = {
  resume: React.PropTypes.object
}
