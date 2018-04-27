import gql from 'graphql-tag';

export default gql`
  {
    articles {
      id
      title
      body
      views
      owner
      tags
    }
  }
`;
