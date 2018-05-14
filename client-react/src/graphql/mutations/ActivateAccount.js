import gql from 'graphql-tag';

export default gql`
  mutation ActivateAccount($id: ID, $token: ID) {
    activateAccount(id: $id, token: $token) {
      id
    }
  }
`;
