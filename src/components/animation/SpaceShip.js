import React from 'react';

var $ = require('jquery');

var SnapSVG = require('snapsvg');
var Snap = SnapSVG ;
import mysvg from '../../stylesheets/rocket.svg';

export default class SpaceShip extends React.Component{
  componentWillReceiveProps(nextProps){
    SnapSVG('#svg2').attr({width:nextProps.width, height:nextProps.height})
  }
  componentDidMount(){
    var s = SnapSVG('#svg2');
    s.attr({width:this.props.width, height:this.props.height});

    var spaceship = s.select('#rocket');
    var spaceshipbbox = spaceship.getBBox();
    var thruster = spaceship.select('#thruster');

    var flight_path         = s.path("M199.00300000000001,253.218a142.246,142.246 0 1,0 284.492,0a142.246,142.246 0 1,0 -284.492,0").attr({ 'fill': 'none', 'stroke': 'none'});
    var flight_path_length  = Snap.path.getTotalLength(flight_path);
    var last_point          = flight_path.getPointAtLength(flight_path_length);


    this.setState({svg:s, spaceship, spaceshipbbox, flight_path, flight_path_length, last_point, thruster},() => {
      this.animate_rocket();
      this.animate_thruster();
    } );
  }

  animate_rocket(mina_scheme){
    Snap.animate(0, this.state.flight_path_length, ( step ) => {
      // Get current (x,y) on path for a given step
      var moveToPoint = this.state.flight_path.getPointAtLength(step);

      var x = moveToPoint.x - (this.state.spaceshipbbox.width/2)-150;
      var y = moveToPoint.y - (this.state.spaceshipbbox.height/2)-200;

      this.state.spaceship.transform(`translate(${x}, ${y}) rotate( ${moveToPoint.alpha - 270}, ${this.state.spaceshipbbox.cx}, ${this.state.spaceshipbbox.cy})`);
    }, 5000, mina_scheme || mina.easeout, () => this.animate_rocket(mina.linear));
  }
  animate_thruster(){
    this.state.thruster.animate({'transform': 'translate(0,-2)'}, 100, () => {
      this.state.thruster.animate({'transform': 'translate(0,0)'}, 100, () => {
        return this.animate_thruster.call(this);
      });
    });
  }

  render(){
    return (
      <div className={'svg_background'} dangerouslySetInnerHTML={{__html: mysvg}} />
    )
  }
}
