import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const UserLink = styled(Link)`
  font-size: 1.5em;
  color: black;
`;

const Comment = ({displayName, userId, body}) => (
  <div>
    <UserLink to={`/profile/${userId}`}>
      {displayName}
    </UserLink>
    <p>{body}</p>
  </div>
);

export default Comment;