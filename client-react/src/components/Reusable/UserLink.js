import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserLink = ({email, displayName, id}) => {
  return (
    <Link to={`/profiles/${id}`}>
      {(displayName && displayName!=='') ? displayName : email}
    </Link>
  )
}

UserLink.propTypes = {
  id: PropTypes.string.isRequired,
  email: PropTypes.string,
  displayName: PropTypes.string,
}

export default UserLink;
