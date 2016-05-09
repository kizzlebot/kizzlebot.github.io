import React from 'react';
var $ = require('jquery');


export default class Experience extends React.Component {
  render(){
    return (
      <section className={`section`} id={this.props.id}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-xs-offset-2 col-xs-10'}>
              <h1></h1>
              <section className="w">
                <div className="w-head">
                  <i className="w-eye"></i>
                  <i className="w-eye w-eye_right"></i>
                </div>
                <div className="w-arm"></div>
                <div className="w-arm w-arm_right"></div>
                <div className="w-leg">
                  <div className="w-leg-top"></div>
                  <div className="w-leg-bottom">
                    <div className="w-heel"></div>
                    <div className="w-shoelace"></div>
                    <div className="w-shoelace"></div>
                  </div>
                </div>
                <div className="w-leg w-leg_right">
                  <div className="w-leg-top"></div>
                  <div className="w-leg-bottom">
                    <div className="w-heel"></div>
                    <div className="w-shoelace"></div>
                    <div className="w-shoelace"></div>
                  </div>
                </div>
                <div className="w-body">
                  <div className="w-body-skin"></div>
                  <div className="w-body-nipples"></div>
                </div>
              </section>

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
