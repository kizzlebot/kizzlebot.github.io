/* Styles */
require('expose?$!expose?jQuery!jquery');
require('!bootstrap-webpack!./stylesheets/bootstrap/bootstrap.config.js');
require('stylesheets/styles.scss');
// require('./stylesheets/wrestler.scss');
require(`guaw-dev/dist/css/jquery.guaw.min.css`);
// require('exports?Timesheet!./components/animation/timesheet.js');


/* SVG Animation Requirements */
var SnapSVG = require('snapsvg');

/* React.js Requirements */
import { Route, IndexRoute } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

/* React.js Components */
import App from './components/App';








ReactDOM.render(<App/>, document.querySelector("#myApp"));
