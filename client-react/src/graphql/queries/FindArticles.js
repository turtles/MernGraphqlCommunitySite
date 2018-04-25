import gql from 'graphql-tag';

export default gql`
  query FindArticles($owner: String!) {
    articles(owner: $owner)
    {
      id
      title
      views
    }
  }
`;
