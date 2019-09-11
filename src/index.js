import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Routes from './Routes';
import history from './history';

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>
  , document.getElementById('root'));