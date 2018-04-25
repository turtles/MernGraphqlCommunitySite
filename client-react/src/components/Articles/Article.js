import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import query from '../../graphql/queries/Article';

class Article extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.articleId}</h3>
      </div>
    );
  }
}

export default graphql(query)(Article);
