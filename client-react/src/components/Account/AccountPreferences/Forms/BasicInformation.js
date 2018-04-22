import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import query from '../../../../graphql/queries/CurrentUser';

class BasicInformation extends Component {
  render() {
    return (
      <Form>
        <legend>Basic Information</legend>
        <FormGroup>
          <Label for="inputUsername">Display Name</Label>
          <Input type="text" name="username" id="inputUsername" />
        </FormGroup>
        <FormGroup>
        <Label for="inputUsername">Email</Label>
          <Input type="email" name="email" id="inputEmail" disabled value={this.props.data.user.email}/>
        </FormGroup>

        <Button color="primary">Submit</Button>
      </Form>
    );
  }
}

export default graphql(query)(
  withRouter(BasicInformation)
);
