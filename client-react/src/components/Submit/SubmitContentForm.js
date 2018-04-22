import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import TagsInput from 'react-tagsinput'
import { graphql } from 'react-apollo';

import mutation from '../../graphql/mutations/SubmitArticle';

class SubmitContentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: '',
      title: '',
      body: '',
      tags: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(tags) {
    this.setState({tags});
  }
  onSubmit(e) {
    e.preventDefault();

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
        <Form onSubmit={this.onSubmit.bind(this)}>
          <FormGroup>
            <Label for="inputTitle">Title</Label>
            <Input type="text" name="title" id="inputTitle" onChange={e=>this.setState({title: e.target.value})}/>
          </FormGroup>
          <FormGroup>
            <Label for="inputBody">Content</Label>
            <Input type="textarea" name="body" id="inputBody" onChange={e=>this.setState({body: e.target.value})}/>
          </FormGroup>
          <TagsInput value={this.state.tags} onChange={this.handleChange} />
          <Button color="primary" type="submit">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default graphql(mutation)(SubmitContentForm);
