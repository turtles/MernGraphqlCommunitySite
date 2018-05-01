import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import ErrorList from '../../../Errors/ErrorList';
import query from '../../../../graphql/queries/CurrentUser';
import mutation from '../../../../graphql/mutations/ChangePassword';

class ChangePassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: ''
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeCurrentPassword = this.onChangeCurrentPassword.bind(this);
    this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
    this.onChangeConfirmNewPassword = this.onChangeConfirmNewPassword.bind(this);
  }
  showError(message) {
    this.setState({ errors: [message] });
  }
  clearErrors() {
    this.setState({ errors:null });
  }
  onSubmit(e) {
    e.preventDefault();
    this.clearErrors();

    if (this.state.newPassword !== this.state.confirmNewPassword)
    {
      this.showError("Passwords do not match.");
      return;
    }

    this.props.mutate({
      variables: {
        currentPassword: this.state.currentPassword,
        newPassword: this.state.newPassword
      },
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error=>error.message);
      console.log(errors);
    });
  }
  onChangeCurrentPassword(e) {
    this.setState({ currentPassword: e.target.value });
  }
  onChangeNewPassword(e) {
    this.setState({ newPassword: e.target.value });
  }
  onChangeConfirmNewPassword(e) {
    this.setState({ confirmNewPassword: e.target.value });
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <legend>Change Password</legend>
        <FormGroup>
          <Label for="inputCurrentPassword">Current Password</Label>
          <Input type="password"
            id="inputCurrentPassword"
            value={this.state.currentPassword}
            onChange={this.onChangeCurrentPassword}
            />
        </FormGroup>
        <FormGroup>
          <Label for="inputNewPassword">New Password</Label>
          <Input type="password"
            id="inputNewPassword"
            value={this.state.newPassword}
            onChange={this.onChangeNewPassword}
            />
        </FormGroup>
        <FormGroup>
          <Label for="inputConfirmNewPassword">Retype New Password</Label>
          <Input type="password"
            id="inputConfirmNewPassword"
            value={this.state.confirmNewPassword}
            onChange={this.onChangeConfirmNewPassword}
            />
        </FormGroup>
        <Button type="submit" color="primary">Submit</Button>
        <ErrorList errors={this.state.errors}/>
      </Form>
    );
  }
}

export default graphql(mutation) (
  graphql(query)(
    ChangePassword
  )
);
