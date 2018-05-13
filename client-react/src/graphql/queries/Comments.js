import gql from 'graphql-tag';

export default gql`
  query Comments($articleId: String) {
    comments(articleId: $articleId) {
      body
      owner {
        id
        displayName
      }
    }
  }
`;
