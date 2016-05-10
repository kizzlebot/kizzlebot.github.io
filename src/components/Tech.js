import React from 'react';
var $ = require('jquery');
var ReactLogo = require('./animation/react_logo');


export default class Tech extends React.Component {
  componentDidMount(){
  }
  render(){
  // console.log(this.props.sections);
  var logProps = {
  };
    return (
      <section className={`section`} id={this.props.id}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-xs-offset-2 col-xs-12'}>
              <ReactLogo {...logProps} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
