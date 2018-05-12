import gql from 'graphql-tag';

export default gql`
  query FindUser($id: ID)
  {
    user(id: $id)
    {
      email
      displayName
      joined
    }
  }
`;
