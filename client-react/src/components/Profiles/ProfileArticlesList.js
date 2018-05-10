import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProfileArticle from './ProfileArticle';

const ProfileArticlesList = (
  {
    articles
  }
) => {
  return (
    <fragment>
      <h3>Articles</h3>
      {
        articles.map((article) => (
          <ProfileArticle
            title={article.title}
            />
        ))
      }
    </fragment>
  );
}

ProfileArticlesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object)
}

export default ProfileArticlesList;
