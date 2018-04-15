import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import AuthForm from './AuthForm';
import NotificationError from './NotificationError';

import query from '../graphql/queries/CurrentUser';
import mutation from '../graphql/mutations/LoginUser';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {errors: []};
  }
  componentWillUpdate(nextProps) {
    const { history } = this.props;

    if (!this.props.data.user && nextProps.data.user) {
      history.push('/'); // redirect
    }
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

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default graphql(mutation)(
    graphql(query)(
      withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))
    )
);
