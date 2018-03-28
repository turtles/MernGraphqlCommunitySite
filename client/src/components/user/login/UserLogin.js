import React from 'react';
import {Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';

const UserLoginContainer = styled.div`
  max-width:600px;
  margin:auto;
`;

class UserLogin extends React.Component {
  render() {
    return (
      <div>
        <h2>User Login</h2>
        <UserLoginContainer>
          <Form>
            <FormGroup>
              <Input type="email" name="email" id="exampleEmail" placeholder="Email or Username" />
            </FormGroup>
            <FormGroup>
              <Input type="password" name="password" id="examplePassword" placeholder="Password" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          <Link to="/">Forgot Password?</Link>
        </UserLoginContainer>
      </div>
    );
  }
}

export default UserLogin;
