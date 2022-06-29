import { gql } from '@apollo/client';

const ADD_POST = gql`
  mutation AddPost(
    $title: String!
    $content: String!
    $userId: ID!
    $subforumId: ID!
    $votes: String!
  ) {
    addPost(
      title: $title
      content: $content
      userId: $userId
      subforumId: $subforumId
      votes: "1"
    ) {
      id
      title
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
    }
  }
`;

const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id) {
      id
    }
  }
`;

const UPDATE_POST = gql`
  mutation UpdatePost($id: ID!, $title: String!, $content: String!) {
    updatePost(id: $id, title: $title, content: $content) {
      id
      title
      content
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
    }
  }
`;

export { ADD_POST, UPDATE_POST, DELETE_POST };
