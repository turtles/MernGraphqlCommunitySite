import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import query from '../../../../graphql/queries/CurrentUser';
import mutation from '../../../../graphql/mutations/UpdateUserInfo';

class BasicInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: this.props.data.user.displayName
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    this.props.mutate({
      variables: {displayName: this.state.displayName},
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error=>error.message);
      console.log(errors);
    });
  }
  onChange(e) {
    this.setState({
      displayName: e.target.value
    });
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <legend>Basic Information</legend>
        <FormGroup>
          <Label for="inputUsername">Display Name</Label>
          <Input
            type="text"
            name="username"
            id="inputUsername"
            onChange={this.onChange}
            value={this.state.displayName}
          />
        </FormGroup>
        <FormGroup>
        <Label for="inputUsername">Email</Label>
          <Input disabled
            type="email"
            name="email"
            id="inputEmail"
            value={this.props.data.user.email}
          />
        </FormGroup>

        <Button color="primary">Submit</Button>
      </Form>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(
    withRouter(BasicInformation)
  )
);
