import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../../graphql/queries/FindArticle';

import ErrorList from '../Reusable/Errors/ErrorList';
import TagsList from '../Reusable/Tags/TagsList';
import UserLink from '../Reusable/UserLink';
import ViewCounter from './ViewCounter';

class Article extends Component {
  render() {
    const { loading, error } = this.props.data;
    if (loading) return <div/>;
    else if (error) return <ErrorList error={error}/>;

    const { title, body, views, tags, owner } = this.props.data.article;
    console.log(owner);
    console.log(this.props.data.article);
    return (
      <div>
        <h3>{title}</h3>
        <UserLink
          email={owner.email}
          displayName={owner.displayName}
          id={owner.id}
          />
        <p>{body}</p>
        <ViewCounter views={views}/>
        <TagsList tags={tags}/>
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
