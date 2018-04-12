import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import AuthForm from './AuthForm';
import NotificationError from './NotificationError';

import mutation from '../graphql/mutations/LoginUser';
import query from '../graphql/queries/CurrentUser';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {errors: []};
  }

  onError(error) {
    this.setState({errors: [error]});
  }
  onSubmit({email, password}) {
    this.props.mutate({
      variables: {email, password},
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error=>error.message);
      this.setState({ errors });
    });
  }
  render() {
    return (
      <div>
        <h3>Log in</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          onError={this.onError.bind(this)}
        />
        <NotificationError errors={this.state.errors}/>
      </div>
    );
  }
}

export default graphql(mutation)(
    graphql(query)(LoginForm)
);
