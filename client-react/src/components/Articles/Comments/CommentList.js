import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

/* <Comment
displayName={comment.user.displayName}
body={comment.body}
/> */

const CommentList = ({comments}) => {
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
              displayName='displayname'
              body='body'
              />
          )
        )
      }
    </div>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CommentList;