import React, { Component } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import TagsInput from 'react-tagsinput'
import { graphql } from 'react-apollo';

import mutation from '../../graphql/mutations/SubmitArticle';

class SubmitArticleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: '',
      title: '',
      body: '',
      tags: []
    };
    this.onChangeTags = this.onChangeTags.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
  }
  onChangeTags(tags) {
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
  onChangeTitle(e) {
    this.setState({title: e.target.value});
  }
  onChangeBody(e) {
    this.setState({body: e.target.value});
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit.bind(this)}>
          <FormGroup>
            <Label for="inputTitle">Title</Label>
            <Input type="text" name="title" id="inputTitle" onChange={this.onChangeTitle}/>
          </FormGroup>
          <FormGroup>
            <Label for="inputBody">Content</Label>
            <Input type="textarea" name="body" id="inputBody" onChange={this.onChangeBody}/>
          </FormGroup>
          <TagsInput value={this.state.tags} onChange={this.onChangeTags} addKeys={[9, 13, 186, 188]} onlyUnique />
          <Button type="submit" color="primary">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default graphql(mutation)(SubmitArticleForm);
