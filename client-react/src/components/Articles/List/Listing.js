import React, {Component} from 'react';
import {Card, CardBody, CardTitle, CardText, Badge} from 'reactstrap';
import {Link} from 'react-router-dom'

import TagsList from '../../Reusable/Tags/TagsList';
import ViewCounter from '../ViewCounter';

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "/articles/view/" + props.articleId
    }
  }
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            <Link to={this.state.route}>{this.props.title}</Link>
          </CardTitle>
          <CardText>{this.props.content}</CardText>
          <CardText><ViewCounter views={this.props.views}/></CardText>
          <TagsList tags={this.props.tags} />
        </CardBody>
      </Card>
    );
  }
}

export default Listing;
