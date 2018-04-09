import gql from 'graphql-tag';

export default gql`
  mutation LoginUser($email: GraphQLString, $password: GraphQLString) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;
