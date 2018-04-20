import gql from 'graphql-tag';

export default gql`
  mutation SubmitArticle($owner: ID, $title: String, $body: String, $tags: [String]) {
    submitArticle(owner: $owner, title: $title, body: $body, tags: $tags) {
      id
      title
      body
    }
  }
`;
