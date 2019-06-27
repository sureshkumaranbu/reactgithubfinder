import './App.css';

import React, { Fragment } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import About from './components/pages/About'
import Alert from './components/layout/Alert'
import AlertState from './components/context/alert/AlertState';
import GithubState from './components/context/github/GithubState';
import Home from './components/pages/Home'
import Navbar from './components/layout/Navbar';
import Search from './components/users/Search';
import User from './components/users/User';
import axios from 'axios';

const App = () =>{

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Githup Finder"/>
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User}/>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );

  
}

export default App;
