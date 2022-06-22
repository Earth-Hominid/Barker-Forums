import { useQuery } from '@apollo/client';
import { GET_USERS } from '../../queries/userQueries';
import Spinner from '../../components/spinner/Spinner';
import UserTable from '../tables/UserTable';

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <Spinner />;
  if (error) return <p>Oops, something went wrong.</p>;

  return <>{!loading && !error && <UserTable data={data} />}</>;
};

export default Users;
