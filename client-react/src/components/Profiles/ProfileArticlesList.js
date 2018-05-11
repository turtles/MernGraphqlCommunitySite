import React from 'react';
import PropTypes from 'prop-types';

import ProfileArticle from './ProfileArticle';

const ProfileArticlesList = (
  {
    articles
  }
) => {
  return (
    <React.Fragment>
      <h3>Articles</h3>
      {
        articles.map((article) => (
          <ProfileArticle
            title={article.title}
            />
        ))
      }
    </React.Fragment>
  );
}

ProfileArticlesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object)
}

export default ProfileArticlesList;
