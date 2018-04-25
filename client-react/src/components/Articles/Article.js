import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import query from '../../graphql/queries/FindArticle';

import NotificationError from '../Errors/NotificationError';

class Article extends Component {
  render() {
    const { loading, error } = this.props.data;
    if (loading) return <div/>;
    else if (error) return <NotificationError error={error}/>;

    const { title, body, views } = this.props.data.article;
    return (
      <div>
        <h3>{title}</h3>
        <p>{body}</p>
        <p>{views} views</p>
      </div>
    );
  }
}

export default graphql(query,
  {
    options:
      (props) => {
        const id = props.articleId.toString();
        return {
          variables: {
            id
          }
        }
      }
  }
)(
  withRouter(Article)
);
