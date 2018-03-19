import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from './pages/HomePage';
import MainNavbar from './components/nav/MainNavbar';
import LoginPage from './pages/LoginPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainNavbar/>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
