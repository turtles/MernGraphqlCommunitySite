import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { withRouter, Link } from 'react-router-dom';

import ErrorList from '../Reusable/Errors/ErrorList';

import query from '../../graphql/queries/CurrentUser';
import mutation from '../../graphql/mutations/ActivateAccount';

class ActivateAccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      /**
       * this is used in case the user is not logged in,
       * still let the route activate the user but point them to the login page afterward
       */
      activated: false,
      errors: []
    };

    const { userId, token } = props.match.params;

    props.mutate({
      variables: {
        id: userId,
        token
      },
      refetchQueries: [{ query }]
    }).then(user => {
      this.setState({activated: true});
    }).catch(res => {
      const errors = res.graphQLErrors.map(error=>error.message);
      this.setState({errors});
    });
  }
  
  render() {
    if (this.props.data.loading) {
      return (<p>Verifying account...</p>);
    }
    let message;
    if (this.props.data.user) {
      if (this.props.data.user.activated) {
        message = (<p>Your account is now activated!</p>);
      }
    } else if (this.state.activated) {
      message = (
        <p>You account is now activated! <Link to='/login'>Login</Link></p>
      );
    }
    return (
      <div>
        {message}
        <ErrorList errors={this.state.errors} />
      </div>
    );
  }
}

export default graphql(query)(
  graphql(mutation)(
    withRouter(ActivateAccountPage)
  )
);