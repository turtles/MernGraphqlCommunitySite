import React, { Component } from 'react';

import Article from './Article';

class ArticlesPage extends Component {
  render() {
    const articleId = this.props.match.params.id;
    if (articleId) {
      return <Article articleId={articleId}/>
    }

    return (
      <div>
        <h1>articles page</h1>
      </div>
    );
  }
}

export default ArticlesPage;
