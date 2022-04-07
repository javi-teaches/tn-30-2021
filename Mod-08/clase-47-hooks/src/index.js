// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

// Components
// import App from './App';
import Main from './Main';

ReactDOM.render(
  <Router>
    <Main />
  </Router>
, document.getElementById('root'));