import { TableRow, DataCell } from './Styles';
import { useMutation } from '@apollo/client';
import { DELETE_USER } from '../../mutations/UserMutations';
import { GET_USERS } from '../../queries/userQueries';

const UserRow = ({ user }) => {
  const [deleteUser] = useMutation(DELETE_USER, {
    variables: { id: user.id },
    // After button is clicked we need a refresh to upate the ui showing the user has been deleted. WE can use refetchQueries, however, it can bog down app if used too much.
    // refetchQueries: [{ query: GET_USERS }],

    // instead I'm using update cache
    update(cache, { data: { deleteUser } }) {
      const { users } = cache.readQuery({ query: GET_USERS });
      cache.writeQuery({
        query: GET_USERS,
        data: {
          users: users.filter((user) => user.id !== deleteUser.id),
        },
      });
    },
  });

  return (
    <TableRow>
      <DataCell>{user.username}</DataCell>
      <DataCell>{user.email}</DataCell>
      <DataCell>
        <button
          onClick={deleteUser}
          className="hover:bg-rose-100 rounded-lg p-1 hover:text-rose-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </DataCell>
    </TableRow>
  );
};

export default UserRow;
