import gql from 'graphql-tag';

export default gql`
  query FindArticle($id: String) {
    article(id: $id)
    {
      title
      body
      views
      tags
      created
      lastModified
      owner {
        id
        displayName
        email
      }
    }
  }
`;
