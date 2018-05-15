import './css/main.css';
import './css/react-tagsinput.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Home from './components/Home';
import Header from './components/Header/Header';
import Preferences from './components/Account/AccountPreferences/AccountPreferences';
import LoginForm from './components/Account/Login/LoginForm';
import RegisterForm from './components/Account/Login/RegisterForm';
import CreateContent from './components/Submit/SubmitArticlePage';
import NotFound from './components/Reusable/Errors/NotFound';
import ArticlesPage from './components/Articles/ArticlesPage';
import ProfilePage from './components/Profiles/ProfilePage';
import ActivateAccountPage from './components/Activate/ActivateAccountPage';

class App extends Component {
  render() {
    return (
      <Router>
        <Container className='App'>
          <Header />
          <div className='page-area'>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/preferences/:subroute?' component={Preferences}/>
              <Route path='/profile/:id?' component={ProfilePage}/>
              <Route exact path='/articles/:page?' component={ArticlesPage}/>
              <Route path='/articles/view/:id?' component={ArticlesPage}/>
              <Route path='/articles/search/:textSearch?/:tags?/:sortBy?/:page?' component={ArticlesPage}/>
              <Route path='/submit' component={CreateContent}/>
              <Route path='/login' component={LoginForm}/>
              <Route path='/register' component={RegisterForm}/>
              <Route path='/activate/:userId/:token' component={ActivateAccountPage}/>
              <Route path='/:page' component={Home}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Container>
      </Router>
    );
  }
}

export default App;
