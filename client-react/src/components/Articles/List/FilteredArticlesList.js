import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ArticlesFilter from './ArticlesFilter';
import ArticlesList from './ArticlesList';

class FilteredArticlesList extends Component {
  constructor(props) {
    super(props);
    this.showList = this.showList.bind(this);
  }
  hasSearchFilter() {
    return this.props.match.path.startsWith("/articles/search");
  }
  getPage() {
    const { page } = this.props.match.params;
    return (page) ? parseInt(page, 10) : 1;
  }
  getTextSearch() {
    const { textSearch } = this.props.match.params;
    return textSearch;
  }
  getTags() {
    const { tags } = this.props.match.params;
    return (tags) ? tags.split('+') : [];
  }
  showList() {
    if (this.hasSearchFilter()) {
      const { sortBy } = this.props.match.params;
      return (
        <ArticlesList
          hasSearchFilter={this.hasSearchFilter()}
          textSearch={this.getTextSearch()}
          tags={this.getTags()}
          sortBy={sortBy}
          page={this.getPage()}
          />
      );
    } else {
      return (
        <ArticlesList page={this.getPage()} />
      );
    }
  }
  render() {
    return (
      <div>
        <ArticlesFilter/>
        {this.showList()}
      </div>
    );
  }
}

export default withRouter(FilteredArticlesList);
