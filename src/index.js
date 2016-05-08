require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack');
require('./stylesheets/styles.scss');


import { Route, IndexRoute } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './components/app';
import $ from 'jquery';
var SnapSVG = require('snapsvg');

window.snap = SnapSVG;
ReactDOM.render(<MainApp/>, document.querySelector("#myApp"));
