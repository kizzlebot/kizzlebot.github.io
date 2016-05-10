import React from 'react';
import InlineCss from "react-inline-css";

var $ = require('jquery');
require('typed.js');

var style = require('!raw!sass!../../stylesheets/computer.scss');


export default class Computer extends React.Component{
  constructor(props, context){
    super(props, context);
    this.state = {
      terminal:[{cmd: 'ls', output:'./myfiles'}],
      interval:null
    };
  }
  componentDidMount(){
    // this.state.interval = setInterval(() => {
    //   if (this.state.terminal.length == 0) return clearInterval(this.state.interval);
    //
    //   var currCmd = this.state.terminal[0];
    //   if (currCmd.cmd == '') {
    //     // TODO: print the output key
    //     var toPrintOutput = this.state.terminal.splice(0, 1);
    //   }
    //   else{
    //     var c = currCmd.cmd.charAt(0);
    //     this.state.terminal[0] = this.state.terminal[0].slice(0);
    //     this.setState(this.state, () => {
    //
    //     })
    //   }
    // },1000);
    //
    // this.setState(this.state);
  }
  render(){
    return (
      <InlineCss stylesheet={style}>
        <div className="terminal-window">
          <header>
            <div className="button green"></div>
            <div className="button yellow"></div>
            <div className="button red"></div>
          </header>
          <section ref={'terminal'} className="terminal">
            <img
              src={require('../../stylesheets/skills.gif')}
              loop={'infinite'}
              />
          </section>
        </div>
        <div className="terminal-data mimik-run-output">
        </div>

      </InlineCss>
    );
  }
}
