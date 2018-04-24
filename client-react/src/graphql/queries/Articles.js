import gql from 'graphql-tag';

export default gql`
  {
    articles {
      title
      body
      views
      owner
      tags
    }
  }
`;
