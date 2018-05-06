import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { withRouter, Link } from 'react-router-dom';

import Listing from './Listing';
import PaginationControl from '../../Reusable/PaginationControl';

import query from '../../../graphql/queries/GetArticleFeed';

class ArticlesList extends Component {
  render() {
    if (this.props.data.loading) {
      return <div/>;
    }
    const { cursor, numPages, feed } = this.props.data.articleFeed;

    if (!feed) {
      return (<div>No articles. Want to <Link to="/submit">submit one?</Link></div>);
    }

    const articlesList = feed.map((article, id) => (
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
        <PaginationControl
          pages={numPages}
          activePage={cursor+1}
          />
      </div>
    );
  }
}

export default graphql(query, {
  options:
    (props) => {
      if (!props.hasSearchFilter) return {variables: {
        cursor: parseInt(props.page, 10)-1
      }};
      return {
        variables: {
          textSearch: props.textSearch,
          tags: props.tags,
          sortBy: props.sortBy,
          cursor: props.page-1,
          pageLength: 5
        }
      }
    }
})(
  withRouter(ArticlesList)
);
