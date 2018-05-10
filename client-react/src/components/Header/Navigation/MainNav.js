import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

import MainNavLink from './MainNavLink';

const MainNav = (props) => {
  console.log('MainNav');
  console.log(props);
  const location = props.location.pathname;
  return (
    <Nav tabs>
      <MainNavLink currentRoute={location} route='/'>
        Home
      </MainNavLink>
      <MainNavLink currentRoute={location} route='/articles'>
        Articles
      </MainNavLink>
      <MainNavLink currentRoute={location} route='/submit'>
        Submit
      </MainNavLink>
      <MainNavLink currentRoute={location} route='/dashboard'>
        Dashboard
      </MainNavLink>
      <MainNavLink currentRoute={location} route='/preferences'>
        My Account
      </MainNavLink>
    </Nav>
  );
}

export default withRouter(MainNav);
