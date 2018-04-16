import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

import Home from './components/Home';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LoginForm from './components/Account/LoginForm';
import RegisterForm from './components/Account/RegisterForm';

class App extends Component {
  render() {
    return (
      <Router>
        <Container className="App">
          <Header />
          <Route exact path="/" component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/login" component={LoginForm}/>
          <Route path="/register" component={RegisterForm}/>
        </Container>
      </Router>
    );
  }
}

export default App;
