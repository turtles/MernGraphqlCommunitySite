import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ProfileArticle = (
  {
    title
  }
) => {
  return (
    <div>
      <h4>title</h4>
    </div>
  );
}

ProfileArticle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default ProfileArticle;
