import { gql } from '@apollo/client';

const ADD_POST = gql`
  mutation AddPost(
    $title: String!
    $content: String!
    $image: String!
    $userId: ID!
    $subforumId: ID!
  ) {
    addPost(
      title: $title
      content: $content
      image: $image
      userId: $userId
      subforumId: $subforumId
    ) {
      id
      title
      content
      created_at
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
