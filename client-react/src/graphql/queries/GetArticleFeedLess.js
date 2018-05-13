import gql from 'graphql-tag';

/**
 * "GeteArticleFeed" without looking up owner information.
 * More efficient because it does not need to resolve a user.
 */
export default gql`
  query GetArticleFeedLess(
      $owner: String,
      $textSearch: String,
      $tags: [String],
      $sortBy: String,
      $cursor: Float,
      $pageLength: Float
    )
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
      total
      feed {
        id
        title
        body
        views
        created
        lastModified
        tags
      }
    }
  }
`;
