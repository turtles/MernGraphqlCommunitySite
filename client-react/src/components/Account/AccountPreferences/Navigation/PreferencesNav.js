import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

class PreferencesNav extends Component {

  render() {
    return (
      <Nav vertical>
        <NavItem>
          <NavLink tag={ Link } to="/preferences">Basic</NavLink>
        </NavItem>
      </Nav>
    );
  }
}

export default PreferencesNav;
