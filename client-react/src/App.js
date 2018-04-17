import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Home from './components/Home';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard';
import LoginForm from './components/Account/LoginForm';
import RegisterForm from './components/Account/RegisterForm';
import CreateContent from './components/Create/CreateContent';
import NotFound from './components/Errors/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Container className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/register" component={RegisterForm}/>
            <Route path="/create" component={CreateContent}/>
            <Route component={NotFound}/>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
