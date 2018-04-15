import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom';

import query from '../graphql/queries/CurrentUser';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.authenticateThenRender = this.authenticateThenRender.bind(this);
  }
  authenticateThenRender() {
    const { loading, user } = this.props.data;
    if (loading) { return (<div/>); }

    if (!user) {
      return (<Redirect to="/login" />);
    }
    return this.renderDashboard();
  }
  renderDashboard() {
    return (
      <p>I am dashboard</p>
    );
  }
  render() {
    return (
      <div>
        {this.authenticateThenRender()}
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

export default graphql(query)(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))
);
