import React, { Component } from 'react';
import { connect } from 'react-redux'

import query from '../graphql/queries/CurrentUser';

class Home extends Component {
  render() {
    return (
      <div>
        <h6>This is the worlds more advanced homepage</h6>
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
