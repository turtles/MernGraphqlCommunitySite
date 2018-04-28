import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import query from '../../../graphql/queries/FindArticles';

import ArticlesFilter from './ArticlesFilter';
import ArticlesList from './ArticlesList';

class FilteredArticlesList extends Component {
  constructor(props) {
    super(props);

    const hasSearchFilter = this.props.match.path.startsWith("/articles/search");
    if (hasSearchFilter) {
      this.state = {
        hasSearchFilter,
        textSearch: this.props.match.params.textSearch,
        sortBy: this.props.match.params.sortBy
      }
    } else {
      this.state = {
        hasSearchFilter
      }
    }
    this.showList = this.showList.bind(this);
  }
  showList() {
    console.log(this.props.match.path);
    console.log(this.state.hasSearchFilter);
    if (this.state.hasSearchFilter) {
      return (
        <ArticlesList textSearch={this.state.textSearch}/>
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
