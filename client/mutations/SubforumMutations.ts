import { gql } from '@apollo/client';

const ADD_SUBFORUM = gql`
  mutation AddSubforum($name: String!, $description: String!, $userId: ID!) {
    addSubforum(name: $name, description: $description, userId: $userId) {
      id
      name
      description
      user {
        id
        username
        email
      }
    }
  }
`;

const DELETE_SUBFORUM = gql`
  mutation DeleteSubforum($id: ID!) {
    deleteSubforum(id: $id) {
      id
    }
  }
`;

const UPDATE_SUBFORUM = gql`
  mutation UpdateSubforum($id: ID!, $name: String!, $description: String!) {
    updateProject(id: $id, name: $name, description: $description) {
      id
      name
      description
      user {
        id
        username
        email
      }
    }
  }
`;

export { ADD_SUBFORUM, DELETE_SUBFORUM, UPDATE_SUBFORUM };
