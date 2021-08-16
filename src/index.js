import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import Details from './screens/details/Details';
import Home from "./screens/home/Home";


ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/details/:id" component={Details}></Route>
  </BrowserRouter>,
  document.getElementById('root')
);

