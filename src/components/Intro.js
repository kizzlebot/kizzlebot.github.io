import React from 'react';
var $ = require('jquery');



export default class Intro extends React.Component {
  render(){
    return (
      <section className={`section`} id={this.props.id}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-xs-offset-2 col-xs-10'}>
              <h1>{'Who I be?'}</h1>
              <h2>{'James Choi'}</h2>
              <h3><span>{'Computer Engineer'}</span>, <span>{'Software Developer'}</span></h3>
              <small>{'but more like'}</small>
              <h3><span>{'Full stack developer'}</span>, <span>{'Web application developer'}</span></h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
