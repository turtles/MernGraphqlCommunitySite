import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class EditArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.title,
      body: props.body,
      tags: props.tags
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdateBody = this.onUpdateBody.bind(this);
    this.onUpdateTitle = this.onUpdateTitle.bind(this);
  }
  valuesChanged() {
    return (
      this.props.title !== this.state.title ||
      this.props.body !== this.state.body
    )
  }
  onSubmit(e) {
    e.preventDefault();
  }
  onUpdateBody(e) {
    this.setState({body: e.target.value});
  }
  onUpdateTitle(e) {
    this.setState({title: e.target.value});
  }
  render() {
    return (
      <div>
        <Button onClick={this.props.onCancel}>Cancel</Button>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="articleBody">Title</Label>
            <Input 
              type="text"
              id="articleTitle"
              value={this.state.title}
              onChange={this.onUpdateTitle}
              />
          </FormGroup>
          <FormGroup>
            <Label for="articleBody">Body</Label>
            <Input 
              type="textarea"
              id="articleBody"
              value={this.state.body}
              onChange={this.onUpdateBody}
              />
          </FormGroup>
          <Button color="primary">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default EditArticle;
