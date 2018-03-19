import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const UserLoginContainer = styled.div`
  max-width:600px;
  margin:auto;
`;

class UserSignup extends React.Component {
  render() {
    return (
      <div>
        <h2>Create an Account</h2>
        <UserLoginContainer>
          <Form>
            <FormGroup>
              <Input type="email" name="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Input type="text" name="username" placeholder="Username" />
            </FormGroup>
            <FormGroup>
              <Input type="password" name="password" placeholder="Password" />
            </FormGroup>
            <Button>Sign up</Button>
          </Form>
        </UserLoginContainer>
      </div>
    );
  }
}

export default UserSignup;
