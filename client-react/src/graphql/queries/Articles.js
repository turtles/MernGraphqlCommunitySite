import gql from 'graphql-tag';

export default gql`
  {
    article {
      title
      body
      views
      owner
      tags
    }
  }
`;
