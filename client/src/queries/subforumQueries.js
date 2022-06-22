import { gql } from '@apollo/client';

const GET_SUBFORUMS = gql`
  const getSubforums {
    subforums {
      name
      description
      userId {
        username
      }

    }
  }
`;
