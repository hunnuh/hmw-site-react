import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";


import { Main } from './main.js'


ReactDOM.render(
  <BrowserRouter>
    <Main />
  </BrowserRouter>,
  document.getElementById('root')
);
