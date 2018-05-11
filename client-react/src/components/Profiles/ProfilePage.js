import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Row, Col } from 'reactstrap';

import query from '../../graphql/queries/FindUser';
import ProfileArticlesList from './ProfileArticlesList';
import UserDetails from './UserDetails';

class ProfilePage extends Component {
  render() {
    if (this.props.data.loading) {
      return (<div/>);
    }
    const { user } = this.props.data;
    if (!user) {
      return <h2>User not found</h2>;
    }

    return (
      <div>
        <Row>
          <h2>User Profile for <i>{user.displayName}</i></h2>
        </Row>
        <Row>
          <Col xs={4}>
            <UserDetails />
          </Col>
          <Col xs={8}>
            <ProfileArticlesList
              owner={user.id}
              />
          </Col>
        </Row>
      </div>
    )
  }
}

export default graphql(query,
  {
    options:
      (props) => ({
          variables: {
            id: props.match.params.id
          }
        })
  }
)(
  ProfilePage
);
