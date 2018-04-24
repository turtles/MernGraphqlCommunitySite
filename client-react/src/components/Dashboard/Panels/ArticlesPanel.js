import React, { Component } from 'react';
import { Row } from 'reactstrap';

import PanelTitle from './PanelTitle';

class ArticlesPanel extends Component {
  render() {
    return (
      <div>
        <PanelTitle>My Articles</PanelTitle>
        <Row>
          article name
        </Row>
        <Row>
          article name
        </Row>
        <Row>
          article name
        </Row>
        <Row>
          article name
        </Row>
      </div>
    );
  }
}

export default ArticlesPanel;
