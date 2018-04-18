import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import SubmitContentForm from './SubmitContentForm';
import RequiresLoginError from '../Errors/RequiresLogin';
import query from '../../graphql/queries/CurrentUser';

class SubmitContent extends Component {
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
        <SubmitContentForm/>
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
  connect(mapStateToProps, mapDispatchToProps)(SubmitContent)
);
