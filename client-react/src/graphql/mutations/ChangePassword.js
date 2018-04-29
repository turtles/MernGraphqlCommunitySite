import gql from 'graphql-tag';

export default gql`
  mutation ChangePassword($currentPassword: String, $newPassword: String) {
    changePassword(currentPassword: $currentPassword, newPassword: $newPassword) {
      id
    }
  }
`;
