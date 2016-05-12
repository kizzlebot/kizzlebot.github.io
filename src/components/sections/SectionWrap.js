import React from 'react';
var $ = require('jquery');
var ReactLogo = require('./animation/react_logo');


export default class SectionWrap extends React.Component {
  render(){
    return (
      <section className={`section`} id={this.props.id}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-md-4'}>&nbsp;</div>
            <div className={'col-md-8 pull-right'}>
              {this.props.children}
            </div>
          </div>
        </div>
      </section>
    )
  }
}
