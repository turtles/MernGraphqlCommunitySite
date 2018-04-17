import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import CreateContentForm from './CreateContentForm';
import RequiresLoginError from '../Errors/RequiresLogin';
import query from '../../graphql/queries/CurrentUser';

class CreateContent extends Component {
  constructor(props) {
    super(props);
    this.authenticateThenRender = this.authenticateThenRender.bind(this);
  }
  authenticateThenRender() {
    const { loading, user } = this.props.data;
    if (loading) { return (<div/>); }

    if (!user) {
      return (
        <RequiresLoginError
          message="You must be logged in to submit an article."
        />
      );
    }
    return this.renderSubmitForm();
  }
  render() {
    return (
      <div>
        {this.authenticateThenRender()}
      </div>
    );
  }
  renderSubmitForm() {
    return (
      <div>
        <h3>Submit an Article</h3>
        <CreateContentForm/>
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
  connect(mapStateToProps, mapDispatchToProps)(CreateContent)
);
