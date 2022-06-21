import { TableRow, DataCell } from './Styles';

const UserRow = ({ user }) => {
  return (
    <TableRow>
      <DataCell>{user.username}</DataCell>
      <DataCell>{user.email}</DataCell>
    </TableRow>
  );
};

export default UserRow;
