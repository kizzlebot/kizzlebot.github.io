import React from 'react';
var $ = require('jquery');
var moment = require('moment');
import Wrestler from './animation/Wrestler';



export default class Experience extends React.Component {
  componentDidMount(){

  }
  render(){
    return (
      <section className={`section`} id={this.props.id}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-xs-offset-2 col-xs-8'}>
              {/*<TimeSheet  data={data}/>*/}
            </div>
            <div className={'col-xs-offset-2 col-xs-12'}>
              {this.props.resume.work.map((e) => {
                return (
                  <ul key={e.company} className='work_experience'>
                    <li>
                      {e.company}
                      <ul className='work_experience_info'>
                        <li>{e.position}</li>
                        <li>{moment(e.startDate).format('MM/YYYY')} - {(e.endDate)? moment(e.endDate).format('MM/YYYY') : 'current'}</li>
                      </ul>
                    </li>
                  </ul>
                );
              })}

              {/*<Wrestler />*/}
            </div>
          </div>
        </div>
      </section>
    )
  }
}


Experience.contextTypes = {
  resume: React.PropTypes.object
}
