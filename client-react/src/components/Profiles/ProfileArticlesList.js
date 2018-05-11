import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import ProfileArticle from './ProfileArticle';

import query from '../../graphql/queries/GetArticleFeed';

const ProfileArticlesList = (props) => {
  if (props.data.loading) {
    return null;
  }
  const { feed } = props.data.articleFeed;

  if (!feed || feed.length===0) {
    return (<div>This user has not submitted any articles.</div>);
  }

  return (
    <React.Fragment>
      <h3>Articles</h3>
      {
        feed.map((article) => (
          <ProfileArticle
            id={article.id}
            title={article.title}
            />
          )
        )
      }
    </React.Fragment>
  );
}

ProfileArticlesList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object)
}

export default graphql(query, {
  options:
    (props) => {
      return {
        variables: {
          owner: props.owner,
          cursor: 0,
          pageLength: 10
        }
      }
    }
})(
  ProfileArticlesList
);
