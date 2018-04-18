import React, { Component } from 'react';
import {Card, CardBody, CardTitle, CardText, Badge} from 'reactstrap';

const Listing = ({title, content, tags}) => (
  <Card>
    <CardBody>
      <CardTitle>
        {title}
        {
          tags.map((tag) => (
            <Badge>{tag.name}</Badge>
          ))
        }
      </CardTitle>
      <CardText>{content}</CardText>
    </CardBody>
  </Card>
)

export default Listing;
