import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Dashboard}/>
          <Route path="/login" component={Login}/>
        </div>
      </Router>
    );
  }
}

export default App;
