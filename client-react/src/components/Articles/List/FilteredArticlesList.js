import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ArticlesFilter from './ArticlesFilter';
import ArticlesList from './ArticlesList';

class FilteredArticlesList extends Component {
  constructor(props) {
    super(props);
    const hasSearchFilter = this.props.match.path.startsWith("/articles/search");
    if (hasSearchFilter) {
      const { textSearch, tags, sortBy, page } = this.props.match.params;
      this.state = {
        hasSearchFilter,
        textSearch: this.formatTextSearch(textSearch),
        tags: this.formatTagsFromRoute(tags),
        sortBy,
        page: this.formatPage(page)
      }
    } else {
      const { page } = this.props.match.params;
      this.state = {
        hasSearchFilter: false,
        page: this.formatPage(page)
      };
    }
    this.showList = this.showList.bind(this);
  }
  formatPage(page) {

    return (page) ? parseInt(page, 10) : 1;
  }
  formatTextSearch(textSearch) {
    return textSearch;
  }
  formatTagsFromRoute(tags) {
    return (tags) ? tags.split('+') : '';
  }
  showList() {
    if (this.state.hasSearchFilter) {
      return (
        <ArticlesList
          hasSearchFilter={this.state.hasSearchFilter}
          textSearch={this.state.textSearch}
          tags={this.state.tags}
          sortBy={this.state.sortBy}
          page={this.state.page}
          />
      );
    } else {
      return (
        <ArticlesList
          page={this.state.page}
          />
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
