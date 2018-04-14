import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import LoginInfo from './LoginInfo';
import query from '../graphql/queries/CurrentUser';
import mutation from '../graphql/mutations/LogoutUser';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {user: null};
    this.renderLogin.bind(this);
  }

  logout() {
    this.props.mutate({
      refetchQueries: [{ query }]
    });
  }

  renderLogin() {
    const { loading, user } = this.props.data;
    if (loading) { return (<div/>); }

    if (user) {
      return (
        <div>
          <LoginInfo username={this.props.data.user.email}/>
          <a onClick={this.logout.bind(this)}>Logout</a>
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

export default graphql(mutation)(
  graphql(query)(Header)
);
