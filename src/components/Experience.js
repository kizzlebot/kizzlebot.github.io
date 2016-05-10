import React from 'react';
var $ = require('jquery');
import Wrestler from './animation/Wrestler';


export default class Experience extends React.Component {
  render(){
    return (
      <section className={`section`} id={this.props.id}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-xs-offset-2 col-xs-10'}>
              <h1></h1>
              <Wrestler />
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
