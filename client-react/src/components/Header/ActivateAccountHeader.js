import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import { graphql } from 'react-apollo';

import mutation from '../../graphql/mutations/ResendActivationEmail';

class ActivateAccountHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.resendEmail = this.resendEmail.bind(this);
  }
  resendEmail() {
    this.setState({
      message: 'Sending...',
      error: false
    });
    this.props.mutate()
    .then(user=> {
      this.setState({
        message: 'Email sent.',
        error: false
      });
    })
    .catch(res => {
      this.setState({
        message: 'Could not send the email.',
        error: true
     });
    });
  }
  render() {
    if (!this.props.user || this.props.user.activated) return null;

    if (this.state.message) {
      return (
        <Alert color={this.state.error ? 'danger' : 'primary'}>
          {this.state.message}
        </Alert>
      )
    }
    else {
      return (
        <Alert color="primary">
          Check your email to activate your account.&nbsp;
          <a href="#" onClick={this.resendEmail}>Resend email?</a>
        </Alert>
      );
    }
  }
}

export default graphql(mutation)(ActivateAccountHeader);
