import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { withRouter, Redirect } from 'react-router-dom';
import { Row, Col } from 'reactstrap';

import BasicInformation from './Forms/BasicInformation';
import ChangePassword from './Forms/ChangePassword';
import PreferencesNav from './Navigation/PreferencesNav';

import query from '../../../graphql/queries/CurrentUser';

class AccountPreferences extends Component {
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
    return this.renderPreferences();
  }
  renderPreferences() {
    return (
      <div>
        <h2>My Account</h2>
        <Row>
          <Col xs="2">
            <PreferencesNav/>
          </Col>
          <Col xs="8">
            {this.renderForm()}
          </Col>
        </Row>
      </div>
    );
  }
  renderForm() {
    switch (this.props.match.params.subroute)
    {
      case 'password':
        return (<ChangePassword/>);
      default:
        return (<BasicInformation/>);
    }
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
  withRouter(AccountPreferences)
);
