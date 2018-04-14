import React, { Component } from 'react';
import PropTypes from 'prop-types';
const validator = require("email-validator");

class AuthForm extends Component {
  constructor(props){
    super(props);
    this.state={email:'',password:''};
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

    console.log('submit', this.state.email, this.state.password);

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
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          placeholder = "Email"
          type="text"
          onChange={this.updateEmail.bind(this)} />
        <input
          placeholder = "Password"
          type="password"
          onChange={this.updatePassword.bind(this)} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

AuthForm.propTypes = {
  onSubmit: PropTypes.func,
  onError: PropTypes.func
};

export default AuthForm;
