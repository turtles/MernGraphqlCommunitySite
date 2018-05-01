import React from 'react';
import { Link } from 'react-router-dom';

export default ({name}) => (
  <Link to={`/articles/tags/${name}`}>
    <span className='tag-readonly'>{name}</span>
  </Link>
);
