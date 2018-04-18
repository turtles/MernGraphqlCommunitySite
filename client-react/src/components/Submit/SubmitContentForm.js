import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import TagsInput from 'react-tagsinput'

class SubmitContentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(tags) {
    this.setState({tags});
  }
  onSubmit(e){
    e.preventDefault();
    console.log('meow');
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit.bind()}>
          <FormGroup>
            <Label for="inputTitle">Title</Label>
            <Input type="text" name="title" id="inputTitle" />
          </FormGroup>
          <FormGroup>
            <Label for="inputBody">Content</Label>
            <Input type="textarea" name="body" id="inputBody" />
          </FormGroup>
          <TagsInput value={this.state.tags} onChange={this.handleChange} />
          <Button color="primary" type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SubmitContentForm;
