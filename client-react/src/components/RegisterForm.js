import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import NotificationError from './NotificationError';

import query from '../graphql/queries/CurrentUser';
import mutation from '../graphql/mutations/RegisterUser';

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {errors: []};
  }

  onSubmit({email, password}) {
  }
  render() {
    return (
      <div>
        <h3>Create an Account</h3>
        <AuthForm onSubmit = {this.onSubmit.bind(this)}/>
        <NotificationError error={this.state.errors}/>
      </div>
    );
  }
}

export default graphql(mutation)(
    graphql(query)(RegisterForm)
);
