import React, { Component } from 'react';
import ArticlesList from './Articles/List/ArticlesList';
import { withRouter } from 'react-router-dom';

class Home extends Component {
  render() {
    const page = parseInt(this.props.match.params.page, 10);
    return (
      <div>
        <ArticlesList page={page ? page : 1} />
      </div>
    );
  }
}

export default withRouter(Home);
