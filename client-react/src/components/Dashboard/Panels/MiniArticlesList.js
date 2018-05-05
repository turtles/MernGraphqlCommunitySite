import React from 'react';
import { Link } from 'react-router-dom';

const MiniArticlesList = ({id, title}) => (
  <Link to={`/articles/view/${id}`}>{title}</Link>
);

export default MiniArticlesList;
