import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input } from 'reactstrap';
const validator = require('email-validator');

const passwordMinLength = 6;

class AuthForm extends Component {
  constructor(props){
    super(props);
    this.state={email:'',password:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateDisplayName = this.updateDisplayName.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { displayName, email, password } = this.state;

    if (!validator.validate(email)) {
      this.showError('Oh, no! That email is not valid.');
      return;
    }
    if (displayName==='') {
      this.showError('Username field cannot be blank.');
      return;
    }
    if (password.length < passwordMinLength) {
      this.showError(`Password must be at least ${passwordMinLength} characters long.`);
      return;
    }

    if (this.props.hasDisplayNameField) {
      this.props.onSubmit({displayName, email, password});
    } else {
      this.props.onSubmit({email, password});
    }
  }

  showError(error) {
    if (this.props.onError) {
      this.props.onError(error);
    }
  }

  updateDisplayName(e) {
    this.setState({displayName: e.target.value});
  }
  updateEmail(e) {
    this.setState({email: e.target.value});
  }
  updatePassword(e) {
    this.setState({password: e.target.value});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {
          this.props.hasDisplayNameField ? (
              <FormGroup>
                <Input
                  placeholder = "Username"
                  type="text"
                  onChange={this.updateDisplayName} />
              </FormGroup>
            ) : null
        }
        <FormGroup>
          <Input
            placeholder = "Email"
            type="text"
            onChange={this.updateEmail} />
        </FormGroup>
        <FormGroup>
          <Input
            placeholder = "Password"
            type="password"
            onChange={this.updatePassword} />
        </FormGroup>
        <FormGroup>
          <Button type="submit" color="primary">Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}

AuthForm.propTypes = {
  onSubmit: PropTypes.func,
  onError: PropTypes.func
};

export default AuthForm;
