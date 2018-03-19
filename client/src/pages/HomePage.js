import React, { Component } from 'react';
import {Container} from 'reactstrap';
import GetHello from './../components/GetHello';
import MainNavbar from './../components/nav/MainNavbar';
import ContentTable from './../components/content/ContentTable';

class HomePage extends Component {
  render() {
    return (
      <Container>
      <GetHello/>
      <ContentTable/>
      </Container>
    );
  }
}

export default HomePage;
