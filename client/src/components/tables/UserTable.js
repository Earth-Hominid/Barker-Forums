import UserRow from './UserRow';

import {
  TableContainer,
  TableTitle,
  StyledTable,
  TableHead,
  TableRow,
  HeaderCell,
  DataCell,
  TableBody,
} from './Styles';

const UserTable = ({ data }) => {
  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <TableRow>
            <HeaderCell>Username</HeaderCell>
            <HeaderCell>Email</HeaderCell>
            <HeaderCell>Delete Member</HeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
};

export default UserTable;
