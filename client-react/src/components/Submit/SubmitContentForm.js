import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input, FormText
} from 'reactstrap';
import TagsInput from 'react-tagsinput'
import { graphql } from 'react-apollo';

import mutation from '../../graphql/mutations/SubmitArticle';

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


    this.props.mutate({
      variables: {
        owner: this.props.userId,
        title: this.state.title,
        body: this.state.body,
        tags: this.state.tags
      }
    }).catch(res => {
      const errors = res.graphQLErrors.map(error=>error.message);
      this.setState({ errors });
    });
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

export default graphql(mutation)(SubmitContentForm);
