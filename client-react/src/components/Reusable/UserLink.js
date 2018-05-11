import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserLink = ({ owner }) => {
  if (owner) {
    return (
      <Link to={`/profiles/${owner.id}`}>
        {owner.displayName}
      </Link>
    );
  } else {
    return (<i>deleted</i>);
  }
}

UserLink.propTypes = {
  id: PropTypes.string.isRequired,
  displayName: PropTypes.string,
}

export default UserLink;
