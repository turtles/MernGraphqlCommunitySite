import React, { Component } from 'react';
import UserSignup from './../components/user/UserSignup.js';
import {Container} from 'reactstrap';

class SignupPage extends Component {
  render() {
    return (
      <Container>
        <UserSignup/>
      </Container>
    );
  }
}

export default SignupPage;
