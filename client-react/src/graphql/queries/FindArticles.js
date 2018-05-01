import gql from 'graphql-tag';

export default gql`
  query FindArticles($owner: String, $textSearch: String, $tags: [String], $sortBy: String) {
    articles(owner: $owner, textSearch: $textSearch, tags: $tags, sortBy: $sortBy)
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
