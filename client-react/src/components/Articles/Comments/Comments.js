import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import CommentList from './CommentList';
import CommentForm from './CommentForm';

class Comments extends Component {
  render() {
    const articleId = this.props.match.params.id;
    return (
      <div>
        <CommentForm
          articleId = { articleId }
        /> 
        <CommentList
          articleId = { articleId }
          />
      </div>
    );
  }
}

export default withRouter(Comments);