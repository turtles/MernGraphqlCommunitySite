import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import SubmitArticleForm from './SubmitArticleForm';
import RequiresLoginError from '../Reusable/Errors/RequiresLogin';
import query from '../../graphql/queries/CurrentUser';

class SubmitArticlePage extends Component {
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
        <h1>Submit an Article</h1>
        <SubmitArticleForm/>
      </div>
    );
  }
}

export default graphql(query)(
  SubmitArticlePage
);
