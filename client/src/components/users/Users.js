import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
  query getUsers {
    users {
      id
      username
      email
    }
  }
`;

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <>Loading...</>;
  if (error) return <p>Oops, something went wrong.</p>;

  return <>{!loading && !error && <h1>Users</h1>}</>;
};

export default Users;
