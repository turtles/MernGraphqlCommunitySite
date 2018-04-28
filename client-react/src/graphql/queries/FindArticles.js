import gql from 'graphql-tag';

export default gql`
  query FindArticles($owner: String, $textSearch: String) {
    articles(owner: $owner, textSearch: $textSearch)
    {
      id
      title
      body
      views
      owner
      tags
    }
  }
`;
