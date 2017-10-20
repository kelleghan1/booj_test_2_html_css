import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
// import Routes from '../routes';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'bootstrap-loader';
import './scss/main.scss';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('app')
);
