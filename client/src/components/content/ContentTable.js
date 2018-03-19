import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import ContentCard from './ContentCard';

class ContentTable extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="col-md-4">
            <ContentCard title="Example Item">Here is a quick little description if you dont mind</ContentCard>
          </Col>
          <Col className="col-md-4">
            <ContentCard title="Example Item">Here is a quick little description if you dont mind</ContentCard>
          </Col>
          <Col className="col-md-4">
            <ContentCard title="Example Item">Here is a quick little description if you dont mind</ContentCard>
          </Col>
        </Row>
        <Row>
          <Col className="col-md-4">
            <ContentCard title="Example Item">Here is a quick little description if you dont mind</ContentCard>
          </Col>
          <Col className="col-md-4">
            <ContentCard title="Example Item">Here is a quick little description if you dont mind</ContentCard>
          </Col>
          <Col className="col-md-4">
            <ContentCard title="Example Item">Here is a quick little description if you dont mind</ContentCard>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContentTable;
