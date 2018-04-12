import gql from 'graphql-tag';

export default gql`
  mutation RegisterUser($email: String, $password: String) {
    register(email: $email, password: $password) {
      id
      email
    }
  }
`;
