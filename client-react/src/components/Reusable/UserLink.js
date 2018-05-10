import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserLink = ({ displayName, id }) => {
  return (
    <Link to={`/profiles/${id}`}>
      {displayName}
    </Link>
  )
}

UserLink.propTypes = {
  id: PropTypes.string.isRequired,
  displayName: PropTypes.string,
}

export default UserLink;
