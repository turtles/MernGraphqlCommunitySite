import React, { Component } from 'react';

import ArticlesFilter from './ArticlesFilter';
import ArticlesList from './ArticlesList';

class FilteredArticlesList extends Component {
  render() {
    return (
      <div>
        <ArticlesFilter/>
        <ArticlesList/>
      </div>
    );
  }
}

export default FilteredArticlesList;
