import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null};
    this.renderLogin.bind(this);
  }

  renderLogin() {
    if (this.state.user) {
      return (
        <div>
          <Link to="/logout">Logout</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/login">Log in</Link>
          <Link to="/register">Sign up</Link>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderLogin()}
      </div>
    )
  }
}

export default Header;
