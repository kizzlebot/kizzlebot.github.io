import React from 'react';
import SpaceShip from './animation/SpaceShip';

export default class Intro extends React.Component {
  constructor(props, context){
    super(props, context);
    this.props = props;
    this.state = {height:1200, width:700};
  }
  componentDidMount(){
    this.setState({width:$(this.refs[this.props.id]).width(), height:$(this.refs[this.props.id]).height()}, function(){
    });
  }
  render(){
    return (
      <section ref={this.props.id} className={`section`} id={this.props.id}>
        <SpaceShip width={this.state.width} height={this.state.height}/>
        <div className={'container'}>
          <div className={'row'}>
            <div className={'col-xs-offset-2 col-xs-10'}>
              <h1><u>{'Who I be?'}</u></h1>
              <h2>{'James Choi'}</h2>
              <h3><span>{'Computer Engineer'}</span>, <span>{'Software Developer'}</span></h3>
              <p><small className='text-small'>{'but more like'}</small></p>
              <h3><span>{'Full stack developer'}</span>, <span>{'Web application developer'}</span></h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
