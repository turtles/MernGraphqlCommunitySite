import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';

class CreateContent extends Component {
  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="inputTitle">Title</Label>
            <Input type="text" name="title" id="inputTitle" />
          </FormGroup>
          <FormGroup>
            <Label for="inputBody">Content</Label>
            <Input type="textarea" name="body" id="inputBody" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default CreateContent;
