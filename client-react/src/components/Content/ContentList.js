import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody } from 'reactstrap';

import Listing from './Listing';

class ContentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
        {
          title: 'meow',
          tags: [{name: 'news'}, {name: 'really good'}],
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          title: 'meow2',
          tags: [{name: 'story'}, {name: 'really good'}],
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ]
    };
  }

  render() {
    const contentList = this.state.articles.map((article, id) => (
      <Listing
        id={id}
        title={article.title}
        content={article.content}
        tags={article.tags}
        />
    ));

    return (
      <div>
        {contentList}
      </div>
    );
  }
}

export default ContentList;
