import gql from 'graphql-tag';

/**
 * If id is not passed in, it will get the current user.
 */
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
