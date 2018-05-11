import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserLink = ({ deleted, displayName, id}) => {
  if (deleted) {
    return (<i>deleted</i>);
  } else {
    return (
      <Link to={`/profiles/${id}`}>
        {displayName}
      </Link>
    );
  }
}

UserLink.propTypes = {
  deleted: PropTypes.bool,
  id: PropTypes.string,
  displayName: PropTypes.string,
}

export default UserLink;
