import gql from 'graphql-tag';

export default gql`
  query FindArticlesByOwner($owner: String!) {
    articles(owner: $owner)
    {
      id
      title
      views
    }
  }
`;
