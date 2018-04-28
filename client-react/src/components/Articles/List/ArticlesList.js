import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import Listing from './Listing';
import query from '../../../graphql/queries/FindArticles';

class ArticlesList extends Component {
  render() {
    if (this.props.data.loading) {
      return <div/>;
    }
    if (!this.props.data.articles) {
      return (<div>No articles. Want to <Link to="/submit">submit one?</Link></div>);
    }
    const articlesList = this.props.data.articles.map((article, id) => (
      <Listing
        key={id}
        articleId={article.id}
        title={article.title}
        content={article.body}
        views={article.views}
        tags={article.tags}
        />
    ));

    return (
      <div>
        {articlesList}
      </div>
    );
  }
}

export default graphql(query, {
  options:
    (props) => {
      if (!props.textSearch) return {variables: {}};
      return {
        variables: {
          textSearch: props.textSearch,
        }
      }
    }
})(
  ArticlesList
);
