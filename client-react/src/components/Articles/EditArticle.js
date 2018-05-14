import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import TagsInput from 'react-tagsinput';
import ErrorList from '../Reusable/Errors/ErrorList';

import mutation from '../../graphql/mutations/ModifyArticle';

class EditArticle extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      title: props.title,
      body: props.body,
      tags: props.tags.slice()
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onUpdateBody = this.onUpdateBody.bind(this);
    this.onUpdateTitle = this.onUpdateTitle.bind(this);
    this.onChangeTags = this.onChangeTags.bind(this);
  }
  /**
   * True if the user has made any changes to the article.
   */
  valuesChanged() {
    return (
      this.props.title !== this.state.title ||
      this.props.body !== this.state.body ||
      !this.arraysAreEqual(this.props.tags, this.state.tags)
    )
  }
  arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; ++i) {
      if (arr1[i]!==arr2[i]) {
        return false;
      }
    }
    return true;
  }
  async onSubmit(e) {
    e.preventDefault();
    
    this.setState({errors: []});

    if (!this.valuesChanged()) {
      this.setState({errors: ['No change']});
      return;
    }

    await this.props.mutate({
      variables: {
        id: this.props.id,
        title: this.state.title,
        body: this.state.body,
        tags: this.state.tags
      }
    }).then(({data}) => {
      this.props.onClose();
    }).catch(res => {
      const errors = res.graphQLErrors.map(error=>error.message);
      this.setState({ errors });
    })
  }
  onUpdateBody(e) {
    this.setState({body: e.target.value});
  }
  onUpdateTitle(e) {
    this.setState({title: e.target.value});
  }
  onChangeTags(tags) {
    this.setState({tags});
  }
  render() {
    return (
      <div>
        <Button onClick={this.props.onClose}>Cancel</Button>
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
          <TagsInput value={this.state.tags}
            onChange={this.onChangeTags}
            addKeys={[9, 13, 186, 188]} onlyUnique />
          <Button color="primary"
            disabled={!this.valuesChanged()}>
            Submit
          </Button>
          <ErrorList errors={this.state.errors} />
        </Form>
      </div>
    );
  }
}

EditArticle.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string)
}

export default graphql(mutation)(
  withRouter(
    EditArticle
  )
);
