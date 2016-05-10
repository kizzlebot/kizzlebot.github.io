import React from 'react';

var $ = require('jquery');
import Computer from './animation/Computer';


export default class Skills extends React.Component {
  render(){
    return (
      <section className={`section`} id={this.props.id}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-xs-offset-2 col-xs-10'}>
              <h1></h1>
              <Computer />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
