import React from 'react';
import { Link } from 'react-router-dom';
import {
    Nav, NavItem, NavLink
} from 'reactstrap';
import styled from 'styled-components';

import LoginInfo from '../Account/Login/LoginInfo';

const LoginNavLink = styled(NavLink)`
  display: inline-block;
  color: white;
  background: #007bff;
  border: 1px solid #007bff;
  border-radius: 2rem;
  width: 6rem;
  height: 2rem;
  line-height: 1rem;
  text-align: center;
  margin: 0 0.25rem;
  &:hover{
    background: #0369d9;
    color: white;
  }
`;

const LoginUnit = ({ user, onLogout }) => {
  if (user) {
    return (
      <Nav>
        <LoginInfo username={user.displayName} activated={user.activated} />
        <NavItem>
          <LoginNavLink href="#" onClick={onLogout}>
            Logout
          </LoginNavLink>
        </NavItem>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <NavItem>
          <LoginNavLink tag={Link} to="/login">Log in</LoginNavLink>
        </NavItem>
        <NavItem>
          <LoginNavLink tag={Link} to="/register">Sign up</LoginNavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default LoginUnit;
