import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo';
import userQuery from '../../graphql/queries/CurrentUser';
import query from '../../graphql/queries/FindArticle';
import { Button } from 'reactstrap';

import ErrorList from '../Reusable/Errors/ErrorList';
import TagsList from '../Reusable/Tags/TagsList';
import UserLink from '../Reusable/UserLink';
import ViewCounter from './ViewCounter';
import Comments from './Comments/Comments';

import EditArticle from './EditArticle';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editting: false
    }

    this.toggleEditor = this.toggleEditor.bind(this);
  }
  toggleEditor() {
    this.setState({editting: !this.state.editting});
  }
  allowEdit() {
    return (this.props.currentUser.user.id === this.props.data.article.owner.id);
  }
  render() {
    const { loading, error } = this.props.data;
    if (loading) return <div/>;
    else if (error) return <ErrorList error={error}/>;

    const { title, body, views, tags, owner } = this.props.data.article;

    if (this.state.editting) {
      return (
        <EditArticle
          id={this.props.articleId}
          onClose={this.toggleEditor}
          body={body}
          title={title}
          tags={tags}
          />
      )
    }
    return (
      <div>
        <h3>{title}</h3>
        <div>
          {
            this.allowEdit() ?
            (<Button onClick={this.toggleEditor}>Edit</Button>)
            :
            null
          }
          <div>
            By {
              owner ?
                (<UserLink displayName={owner.displayName} id={owner.id} />)
                :
                (<UserLink deleted />)
            }
          </div>
          <p>{body}</p>
          <ViewCounter views={views}/>
          <TagsList tags={tags}/>
        </div>
        <Comments/>
      </div>
    );
  }
}

export default compose(
  graphql(userQuery, { name: 'currentUser' }),
  graphql(query,
    {
      options:
        (props) => {
          const id = props.articleId.toString();
          return {
            variables: {
              id
            }
          }
        }
    }
  ))(
  Article
);
