import React, { Component } from 'react';
import { connect } from 'react-redux'

import ContentList from './Content/ContentList';

class Home extends Component {
  render() {
    return (
      <div>
        <ContentList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
