import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input } from 'reactstrap';
const validator = require('email-validator');

class AuthForm extends Component {
  constructor(props){
    super(props);
    this.state={email:'',password:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (!validator.validate(this.state.email)) {
      if (this.props.onError) {
        console.log('error');
        this.props.onError("Oh no, that email is not valid.");
      }
      return;
    }

    this.props.onSubmit(this.state);
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
