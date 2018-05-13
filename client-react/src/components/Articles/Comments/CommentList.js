import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import query from '../../../graphql/queries/Comments';

import Comment from './Comment';

/* <Comment
displayName={comment.user.displayName}
body={comment.body}
/> */

const CommentList = (props) => {
  if (props.data.loading) {
    return <div/>;
  }
  const {comments} = props.data;
  if (!comments || comments.length===0) {
    return (
      <div>
        No comments
      </div>
    );
  }
  return (
    <div>
      {
        comments.map((comment, id) => (
            <Comment
              key={id}
              displayName={comment.owner.displayName}
              body={comment.body}
              />
          )
        )
      }
    </div>
  );
}

CommentList.propTypes = {
  articleId: PropTypes.string.isRequired
};

export default graphql(query,{
  options:
    (props) => {
      return {
        variables: {
          articleId: props.articleId
        }
      }
    }
})(CommentList);