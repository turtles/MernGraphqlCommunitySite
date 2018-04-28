import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import query from '../../graphql/queries/CurrentUser';
import ArticlesPanel from './Panels/ArticlesPanel';
import ImpactPanel from './Panels/ImpactPanel';

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
      <Row>
        <Col xs="3">
          <ArticlesPanel owner={this.props.data.user.id}/>
        </Col>
        <Col xs="9">
          <ImpactPanel/>
        </Col>
      </Row>
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

export default graphql(query)(
  Dashboard
);
