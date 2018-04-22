import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Card, CardTitle, CardImg, CardText, CardBody } from 'reactstrap';

import Listing from './Listing';
import query from '../../graphql/queries/Articles';

class ContentList extends Component {
  constructor(props) {
    super(props);
  }
  
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
