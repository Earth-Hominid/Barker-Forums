import { gql, useQuery } from '@apollo/client';

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

export { GET_SUBFORUMS };
