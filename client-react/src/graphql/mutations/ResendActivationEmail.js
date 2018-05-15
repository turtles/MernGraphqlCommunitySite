import gql from 'graphql-tag';

export default gql`
  mutation {
    resendActivationEmail {
      id
    }
  }
`;
