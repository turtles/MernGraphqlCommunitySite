import React from 'react';

const Comment = ({displayName, body}) => (
  <div>
    <h5>{displayName}</h5>
    <p>{body}</p>
  </div>
);

export default Comment;