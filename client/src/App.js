import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import HomePage from './pages/HomePage';
import MainNavbar from './components/nav/MainNavbar';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import SignupPage from './pages/SignupPage';
import SubmitPage from './pages/SubmitPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainNavbar/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={SignupPage} />
            <Route path="/submit" component={SubmitPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
