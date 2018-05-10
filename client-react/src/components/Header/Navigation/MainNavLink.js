import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


const MainNavLink = ({currentRoute, route, children}) => {
  let isActive;
  if (route === '/') {
    isActive = (currentRoute === route);
  } else {
    isActive = currentRoute.startsWith(route);
  }
  return (
    <NavItem>
      <NavLink
        active={isActive}
        tag={Link}
        to={route}>
        {children}
      </NavLink>
    </NavItem>
  )
}

export default MainNavLink;
