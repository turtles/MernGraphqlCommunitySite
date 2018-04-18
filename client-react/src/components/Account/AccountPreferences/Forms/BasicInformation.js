import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import query from '../../../../graphql/queries/CurrentUser';

class BasicInformation extends Component {
  render() {
    return (
      <Form>
        <legend>Basic Information</legend>
        <FormGroup>
          <Label for="inputUsername">Display Name</Label>
          <Input type="text" name="username" id="inputUsername" />
        </FormGroup>
        <FormGroup>
        <Label for="inputUsername">Email</Label>
          <Input type="email" name="email" id="inputEmail" disabled value={this.props.data.user.email}/>
        </FormGroup>

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

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default graphql(query)(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(BasicInformation))
);
