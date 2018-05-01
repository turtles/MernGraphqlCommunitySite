import './css/react-tagsinput.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Home from './components/Home';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard';
import Preferences from './components/Account/AccountPreferences/AccountPreferences';
import LoginForm from './components/Account/Login/LoginForm';
import RegisterForm from './components/Account/Login/RegisterForm';
import CreateContent from './components/Submit/SubmitArticlePage';
import NotFound from './components/Errors/NotFound';
import ArticlesPage from './components/Articles/ArticlesPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Container className="App">
          <Header />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/preferences/:subroute?" component={Preferences}/>
            <Route path="/articles/view/:id?" component={ArticlesPage}/>
            <Route path="/articles/search/:textSearch?/:sortBy?" component={ArticlesPage}/>
            <Route path="/articles" component={ArticlesPage}/>
            <Route path="/submit" component={CreateContent}/>
            <Route path="/login" component={LoginForm}/>
            <Route path="/register" component={RegisterForm}/>
            <Route component={NotFound}/>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
