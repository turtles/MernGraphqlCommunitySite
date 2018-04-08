import React, { Component } from 'react';

class AuthForm extends Component {
  constructor(props){
    super(props);
    this.state={email:'',password:''};
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit');

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
        <button type="submit">Log in</button>
      </form>
    );
  }
}

export default AuthForm;
