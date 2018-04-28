import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../../graphql/queries/FindArticle';

import NotificationError from '../Errors/NotificationError';
import ViewCounter from './ViewCounter';

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
        <ViewCounter views={views}/>
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
  Article
);
