import React from 'react';
var $ = require('jquery');
import Wrestler from './animation/Wrestler';
// var Timesheet = require('./animation/timesheet');


export default class Experience extends React.Component {
  componentDidMount(){

  }
  render(){
      // var data = [
      //   ['2002', '09/2002', 'A freaking awesome time', 'lorem'],
      //   ['02/2005', '05/2006', 'Enjoyed those times as well', 'ipsum'],
      //   ['09/2008', '06/2010', 'FRINGE #1 & #2', 'ipsum']];

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
                  <ul key={e.company}>
                    <li>
                      {e.company}
                      <ul>
                        <li>{e.position}</li>
                        <li>{e.startDate} - {e.endDate || 'current'}</li>
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
