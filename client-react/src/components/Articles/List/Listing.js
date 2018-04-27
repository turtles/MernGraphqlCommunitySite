import React, {Component} from 'react';
import {Card, CardBody, CardTitle, CardText, Badge} from 'reactstrap';
import {Link} from 'react-router-dom'

class Listing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "/articles/" + props.articleId
    }
  }
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>
            <Link to={this.state.route}>{this.props.title}</Link>
            {
              this.props.tags.map((tag) => (
                <Badge>{tag.name}</Badge>
              ))
            }
          </CardTitle>
          <CardText>{this.props.content}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Listing;
