import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import { Row, Col, Nav, NavItem } from 'reactstrap';

import HeaderLogo from './HeaderLogo';
import LoginInfo from './Account/LoginInfo';
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
        <Nav pills>
          <NavItem>
            <LoginInfo username={this.props.data.user.email}/>
          </NavItem>
          <NavItem>
            <a onClick={this.logout.bind(this)}>Logout</a>
          </NavItem>
        </Nav>
      );
    } else {
      return (
        <Nav pills>
          <NavItem>
            <Link to="/login">Log in</Link>
          </NavItem>
          <NavItem>
            <Link to="/register">Sign up</Link>
          </NavItem>
        </Nav>
      );
    }
  }

  render() {
    return (
      <Row>
        <Col md="10" xs="6"><HeaderLogo/></Col>
        <Col md="2" xs="6">{this.renderLogin()}</Col>
      </Row>
    )
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
);
