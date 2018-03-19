import React, { Component } from 'react';
import UserLogin from './../components/user/UserLogin.js';
import {Container} from 'reactstrap';

class NotFoundPage extends Component {
  render() {
    return (
      <Container>
        <h2>(loud crash!)</h2>
        <p>404 not found</p>
      </Container>
    );
  }
}

export default NotFoundPage;
