import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileArticle = ({ id, title }) => {
  return (
    <div key={id}>
      <Link to={`/articles/view/${id}`}>
        {title}
      </Link>
    </div>
  );
}

ProfileArticle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ProfileArticle;
