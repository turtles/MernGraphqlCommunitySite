import gql from 'graphql-tag';

export default gql`
  query GetArticleFeed(
      $owner: String,
      $textSearch: String,
      $tags: [String],
      $sortBy: String,
      $cursor: Float,
      $pageLength: Float)
  {
    articleFeed(
      owner: $owner,
      textSearch: $textSearch,
      tags: $tags,
      sortBy: $sortBy,
      cursor: $cursor,
      pageLength: $pageLength)
    {
      cursor
      numPages
      feed {
        id
        title
        body
        views
        owner
        tags
      }
    }
  }
`;
