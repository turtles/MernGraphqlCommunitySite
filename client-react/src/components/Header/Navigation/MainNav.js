import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class MainNav extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink tag={Link} to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/submit">Submit</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/dashboard">Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/preferences">My Account</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default MainNav;
