import { gql } from '@apollo/client';

const GET_SUBFORUMS = gql`
  query getSubforums {
    subforums {
      name
      description
      userId {
        username
      }
    }
  }
`;

const GET_PARTICULAR_SUBFORUM = gql`
  query getSubforum
`;

export { GET_SUBFORUMS };
