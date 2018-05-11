import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import query from '../../../../graphql/queries/CurrentUser';
import mutation from '../../../../graphql/mutations/UpdateDisplayName';

import ErrorList from '../../../Reusable/Errors/ErrorList';

class BasicInformation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: this.props.data.user.displayName,
      errors: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeDisplayName = this.onChangeDisplayName.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();

    const {displayName} = this.state;
    this.props.mutate({
      variables: { displayName },
      refetchQueries: [{ query }]
    }).catch(res => {
      const errors = res.graphQLErrors.map(error=>error.message);
      this.setState({errors});
    });
  }
  onChangeDisplayName(e) {
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
            id="inputUsername"
            onChange={this.onChangeDisplayName}
            value={this.state.displayName}
          />
        </FormGroup>
        <FormGroup>
          <Label for="inputUsername">Email</Label>
          <Input disabled
            type="email"
            id="inputEmail"
            value={this.props.data.user.email}
          />
        </FormGroup>

        <Button
          disabled={this.props.data.user.displayName === this.state.displayName}
          color="primary"
          >
            Submit
        </Button>

        <ErrorList errors={this.state.errors} />
      </Form>
    );
  }
}

export default graphql(mutation)(
  graphql(query)(
    BasicInformation
  )
);
