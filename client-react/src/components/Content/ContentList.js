import React, { Component } from 'react';
import { Card, CardTitle, CardImg, CardText, CardBody } from 'reactstrap';

class ContentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [
        { title: 'meow', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
        { title: 'meow2', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' }
      ]
    };
  }

  render() {
    const contentList = this.state.articles.map((article, id) => (
      <Card key={id}>
        <CardBody>
          <CardTitle>{article.title}</CardTitle>
          <CardText>{article.content}</CardText>
        </CardBody>
      </Card>
    ));

    return (
      <div>
        {contentList}
      </div>
    );
  }
}

export default ContentList;
