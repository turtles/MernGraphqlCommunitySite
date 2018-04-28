import React, { Component } from 'react';
import { Row } from 'reactstrap';
import { graphql } from 'react-apollo';

import PanelTitle from './PanelTitle';
import MiniArticleListing from './MiniArticleListing';

import query from '../../../graphql/queries/FindArticles';

class ArticlesPanel extends Component {
  constructor(props) {
    super(props);
    this.renderArticles = this.renderArticles.bind(this);
  }
  render() {
    return (
      <div>
        <PanelTitle>My Articles</PanelTitle>
        {this.renderArticles()}
      </div>
    );
  }
  renderArticles() {
    if (this.props.data.loading) {
      return <div/>
    }
    return (
      <div>
        {
          this.props.data.articles.map((article, id)=>(
            <Row key={id}>
              <MiniArticleListing
                title={article.title}
                id={article.id}
                />
            </Row>
            )
          )
        }
      </div>
    )
  }
}

export default graphql(query, {
  options:
    (props) => {
      return {
        variables: {
          owner: props.owner,
        }
      }
    }
})(
  ArticlesPanel
);
