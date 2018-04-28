import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import query from '../../../../graphql/queries/CurrentUser';

class ChangePassword extends Component {
  render() {
    return (
      <Form>
        <legend>Change Password</legend>
        <FormGroup>
          <Label for="inputCurrentPassword">Current Password</Label>
          <Input type="password" name="username" id="inputCurrentPassword" />
        </FormGroup>
        <FormGroup>
          <Label for="inputNewPassword">New Password</Label>
          <Input type="password" name="username" id="inputNewPassword" />
        </FormGroup>
        <FormGroup>
          <Label for="inputConfirmNewPassword">Retype New Password</Label>
          <Input type="password" name="username" id="inputConfirmNewPassword" />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    );
  }
}

export default graphql(query)(
  ChangePassword
);
