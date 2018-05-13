import gql from 'graphql-tag';

/**
 * Get feed of articles for paginated lists. Intended to get all info about the articles fetched.
 * It may be better to make a smaller version of this query, when appropriate, to avoid over fetching.
 */
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
      total
      feed {
        id
        title
        body
        views
        created
        lastModified
        owner {
          email
        }
        tags
      }
    }
  }
`;
