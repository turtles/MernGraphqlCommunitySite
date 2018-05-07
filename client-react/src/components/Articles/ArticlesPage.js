import React, { Component } from 'react';

import Article from './Article';
import FilteredArticlesList from './List/FilteredArticlesList';

class ArticlesPage extends Component {
  render() {
    const articleId = this.props.match.params.id;
    if (articleId) {
      return <Article articleId={articleId}/>
    }

    return (
      <div>
        <h1>Browse All Articles</h1>
        <FilteredArticlesList/>
      </div>
    );
  }
}

export default ArticlesPage;
