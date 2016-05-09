import React from 'react';
var $ = require('jquery');
require(`/Users/kizzlebot/Documents/Developer/kizzlebot.github.io/node_modules/guaw-dev/dist/js/jquery.guaw.min.js`);


export default class Activity extends React.Component {
  componentDidMount(){
    $(this.refs.github).guaw({
      username:'kizzlebot',
      timeout:1800,
      debug:false
    });
  }
  render(){
    return (
      <section className={`section`} id={this.props.id}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-xs-offset-2 col-xs-10'}>
              <div className={'col-xs-4'}>
                <h1>This is what I do on my own time</h1>
              </div>
              <div className={'col-xs-8'}>
                <div ref={'github'}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

Activity.contextTypes = {
  resume: React.PropTypes.object
}
