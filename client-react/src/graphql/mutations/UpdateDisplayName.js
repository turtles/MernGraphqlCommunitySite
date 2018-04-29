import gql from 'graphql-tag';

export default gql`
  mutation UpdateDisplayName($displayName: String) {
    updateDisplayName(displayName: $displayName) {
      id
    }
  }
`;
