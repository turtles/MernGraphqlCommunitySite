import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import {Link} from 'react-router-dom';

import Listing from './Listing';
import query from '../../graphql/queries/Articles';

class ContentList extends Component {
  render() {
    if (this.props.data.loading) {
      return <div/>;
    }
    if (!this.props.data.article) {
      return (<div>No articles. Want to <Link to="/submit">submit one?</Link></div>);
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
