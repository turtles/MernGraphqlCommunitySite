import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const MiniArticleListing = ({id, title}) => (
  <Link to={`/articles/view/${id}`}>{title}</Link>
);

export default MiniArticleListing;
