import React from 'react';
var $ = require('jquery');
require(`/Users/kizzlebot/Documents/Developer/kizzlebot.github.io/node_modules/guaw-dev/dist/js/jquery.guaw.min.js`);
require(`/Users/kizzlebot/Documents/Developer/kizzlebot.github.io/node_modules/guaw-dev/dist/css/jquery.guaw.min.css`);

export default class Activity extends React.Component {
  componentDidMount(){
    $(this.refs.github).guaw({
      username:'kizzlebot',
      timeout:1800,
      debug:true
    });
  }
  render(){
    return (
      <section className={`section`} id={this.props.id}>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-xs-offset-2 col-xs-10'}>
              <div className={'col-xs-4'}>
                <h1>Your boy puts in work</h1>
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
