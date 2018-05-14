import gql from 'graphql-tag';

export default gql`
  mutation ModifyArticle($id: ID, $title: String, $body: String, $tags: [String]) {
    modifyArticle(id: $id, title: $title, body: $body, tags: $tags) {
      id
    }
  }
`;
