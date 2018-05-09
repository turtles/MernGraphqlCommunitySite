import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import query from '../../graphql/queries/FindUser';

class ProfilePage extends React.Component {

  render() {
    if (this.props.data.loading) {
      return (<div/>);
    }
    const { user } = this.props.data;
    return (
      <h2>User Profile for <i>{user.displayName}</i></h2>
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
