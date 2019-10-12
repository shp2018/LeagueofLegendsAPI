import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from './Home/index.jsx';
import Summoner from './Summoner/index.jsx'



ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={Home}></Route>
      <Route path="/summoner" component={Summoner}></Route>
     
      
      
      
     
      
    </Router>
), document.getElementById('app'));

