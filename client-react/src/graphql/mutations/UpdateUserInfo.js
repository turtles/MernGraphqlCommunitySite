import gql from 'graphql-tag';

export default gql`
  mutation UpdateUserInfo($displayName: String) {
    updateUserInfo(displayName: $displayName) {
      id
    }
  }
`;
