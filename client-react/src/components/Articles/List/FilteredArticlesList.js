import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import ArticlesFilter from './ArticlesFilter';
import ArticlesList from './ArticlesList';

class FilteredArticlesList extends Component {
  constructor(props) {
    super(props);
    const hasSearchFilter = this.props.match.path.startsWith("/articles/search");
    if (hasSearchFilter) {
      const { textSearch, tags, sortBy } = this.props.match.params;
      this.state = {
        hasSearchFilter,
        textSearch: this.formatTextSearch(textSearch),
        tags: this.formatTagsFromRoute(tags),
        sortBy
      }
    } else {
      this.state = { hasSearchFilter: false };
    }
    this.showList = this.showList.bind(this);
  }
  formatTextSearch(textSearch) {
    return textSearch;
  }
  formatTagsFromRoute(tags) {
    if (!tags) return '';
    return tags.split('+');
  }
  showList() {
    if (this.state.hasSearchFilter) {
      console.log(this.state);
      return (
        <ArticlesList
          hasSearchFilter={this.state.hasSearchFilter}
          textSearch={this.state.textSearch}
          tags={this.state.tags}
          sortBy={this.state.sortBy}
          />
      );
    } else {
      return <ArticlesList/>
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
