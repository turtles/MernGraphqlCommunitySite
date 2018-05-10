import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Nav, NavItem, NavLink
} from 'reactstrap';

import LoginInfo from '../Account/Login/LoginInfo';

const LoginUnit = ({ user, onLogout }) => {
  if (user) {
    return (
      <Nav>
        <NavItem>
          <LoginInfo username={user.displayName} />
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={onLogout}>Logout</NavLink>
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

export default LoginUnit;
