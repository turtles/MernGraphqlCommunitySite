import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import {Form, FormGroup, Label, Input, Collapse, Button} from 'reactstrap';

import query from '../../../graphql/queries/CurrentUser';
import mutation from '../../../graphql/mutations/SubmitComment';

import ErrorList from '../../Reusable/Errors/ErrorList';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      collapse: false,
      errors: []
    };

    this.toggle = this.toggle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  onChangeBody(e) {
    this.setState({body: e.target.value});
  }
  async onSubmit(e) {
    e.preventDefault();
    await this.props.mutate({
      variables: {
        owner: this.props.data.user.id,
        article: this.props.articleId,
        body: this.state.body
      }
    }).catch(res => {
      const errors = res.graphQLErrors.map(error=>error.message);
      this.setState({ errors });
    })
  }
  render() {
    if (this.props.data.loading) return null;
    if (!this.props.data.user) return null;
    if (!this.props.data.user.activated) {
      return (
        <p>Before you can comment, please verify your email.</p>
      )
    }
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Leave Comment</Button>
        <Collapse isOpen={this.state.collapse}>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="commentBody">Comment</Label>
              <Input 
                type="textarea"
                id="commentBody"
                onChange={this.onChangeBody}
                />
            </FormGroup>
            <Button color="primary"
              disabled={this.state.body.length === 0}>
              Submit
            </Button>
            <ErrorList errors={this.state.errors} />
          </Form>
        </Collapse>
      </div>
    );
  }
}

CommentForm.propTypes = {
  articleId: PropTypes.string.isRequired
}

export default graphql(query)(
  graphql(mutation)(
    CommentForm
  )
);