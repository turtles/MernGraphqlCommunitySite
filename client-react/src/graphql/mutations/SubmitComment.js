import gql from 'graphql-tag';

export default gql`
  mutation SubmitComment($owner: ID, $article: ID, $body: String) {
    submitComment(owner: $owner, article: $article, body: $body) {
      body
    }
  }
`;
