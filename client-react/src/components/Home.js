import React, { Component } from 'react';
import ArticlesList from './Articles/List/ArticlesList';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  render() {
    const { page } = this.props.match.params;
    return (
      <div>
        <ArticlesList page={page ? page : 1} />
      </div>
    );
  }
}

export default withRouter(Home);
