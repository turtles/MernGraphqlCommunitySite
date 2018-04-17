import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import {
    Row,
    Nav, NavItem, NavLink, Navbar, NavbarBrand
} from 'reactstrap';

import HeaderLogo from './HeaderLogo';
import LoginInfo from './../Account/LoginInfo';
import MainNav from './Navigation/MainNav';
import query from '../../graphql/queries/CurrentUser';
import mutation from '../../graphql/mutations/LogoutUser';

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
    if (loading) { return (<Nav/>); }

    if (user) {
      return (
        <Nav>
          <NavItem>
            <LoginInfo username={this.props.data.user.email}/>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={this.logout.bind(this)}>Logout</NavLink>
          </NavItem>
        </Nav>
      );
    } else {
      return (
        <Nav>
          <NavItem>
            <NavLink tag={Link} to="/login">Log in</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/register">Sign up</NavLink>
          </NavItem>
        </Nav>
      );
    }
  }

  render() {
    return (
      <div>
        <Navbar>
          <NavbarBrand tag={Link} to={'/'}>
            <HeaderLogo/>
          </NavbarBrand>

          {this.renderLogin()}
        </Navbar>
        <Row>
          <MainNav/>
        </Row>
      </div>
    )
  }
}

export default graphql(mutation)(
  graphql(query)(Header)
);
