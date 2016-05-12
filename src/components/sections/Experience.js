import React from 'react';
var $ = require('jquery');
var moment = require('moment');
import Wrestler from './animation/Wrestler';
import SectionWrap from './SectionWrap';



export default class Experience extends React.Component {
  _printHighlights(e){
    return (e.highlights.length > 0) ? (
      <li>
        Info:
        <ul>{e.highlights.map(f => (<li key={'highlight'+f}>{f}</li>))}</ul>
      </li>
    ) : null;
  }
  render(){
    return (
      <SectionWrap {...this.props}>
        {this.context.resume.work.map((e) => {
          var company = (e.website) ? (<a href={e.website}>{e.company}</a>) : e.company;
          return (
            <ul key={e.company} className='work_experience'>
              <li>
                {company}
                <ul className='work_experience_info'>
                  <li>{e.position}</li>
                  <li>{moment(e.startDate).format('MM/YYYY')} - {(e.endDate)? moment(e.endDate).format('MM/YYYY') : 'current'}</li>
                  <li>{e.summary}</li>
                  {this._printHighlights(e)}
                </ul>
              </li>
            </ul>
          );
        })}
      </SectionWrap>
    )
  }
}


Experience.contextTypes = {
  resume: React.PropTypes.object
}
