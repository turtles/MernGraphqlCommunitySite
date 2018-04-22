import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import Listing from './Listing';
import query from '../../graphql/queries/Articles';

class ContentList extends Component {
  render() {
    if (this.props.data.loading) {
      return <div/>;
    }
    const contentList = this.props.data.article.map((article, id) => (
      <Listing
        key={id}
        title={article.title}
        content={article.body}
        tags={article.tags}
        />
    ));

    return (
      <div>
        {contentList}
      </div>
    );
  }
}

export default graphql(query)(ContentList);
