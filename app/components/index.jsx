import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import Home from './Home/index.jsx';
import Summoner from './Summoner/index.jsx'
import Rotation from './Rotation/index.jsx'
import Match from './Match/index.jsx'


ReactDOM.render((
    <Router history={browserHistory}>
      <Route path="/" component={Home}></Route>
    
      <Route path="/rotation" component={Rotation}></Route>
      <Route path="/match(/:region)(/:summonerName)" component={Match}></Route>
      <Route path="/summoner(/:region)(/:summonerName)" component={Summoner}></Route>
     
      
      
      
     
      
    </Router>
), document.getElementById('app'));

