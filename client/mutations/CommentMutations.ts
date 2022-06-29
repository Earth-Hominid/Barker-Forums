import { gql } from '@apollo/client';

const ADD_COMMENT = gql`
  mutation AddComent(
    $content: String!
    $userId: String!
     subforumId: String!
    postId: String!
    votes: String!
  ) {
    addComment(
      $content: $content
      $userId: $userId
      subforumId: $subforumId
      postId: $postId 
      votes: "1"
    ) {
      id
      content
      subforum {
        id
        name
        description
        votes
      }
      post {
        id
        title
        content
        votes
      }
      user {
        id 
        username
        email
      }
    }
  }
`;

const DELETE_COMMENT = gql`
  mutation DeleteComment($id: ID!) {
    deleteComment(id: $id) {
      id
    }
  }
`;

const UPDATE_COMMENT = gql`
  mutation UpdateComment($id: ID!, $content: String!) {
    updatePost(id: $id, content: $content) {
      id
      content
      votes
      subforum {
        id
        name
        description
      }
      user {
        id
        username
        email
      }
      post {
        id
        title
        content
        votes
      }
    }
  }
`;

export { ADD_COMMENT, DELETE_COMMENT, UPDATE_COMMENT };
