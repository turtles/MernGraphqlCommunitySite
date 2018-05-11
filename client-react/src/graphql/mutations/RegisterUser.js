import gql from 'graphql-tag';

export default gql`
  mutation RegisterUser($displayName: String, $email: String, $password: String) {
    register(displayName: $displayName, email: $email, password: $password) {
      id
      email
    }
  }
`;
