import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        <h6>This is the world&#39;s most advanced homepage</h6>
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
