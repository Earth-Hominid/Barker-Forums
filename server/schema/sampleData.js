// Users
const users = [
  {
    id: '1',
    username: 'batman',
    email: 'batman@gmail.com',
  },
  {
    id: '2',
    username: 'superman',
    email: 'superman@gmail.com',
  },
  {
    id: '3',
    username: 'flash',
    email: 'flash@gmail.com',
  },
];

// Forums
const subforums = [
  {
    id: '1',
    userId: '2',
    name: 'batman',
    description: 'A forum for all things batman related.',
    status: 'In progress',
  },
  {
    id: '2',
    userId: '2',
    name: 'superman',
    description: 'A forum for all things superman related.',
    status: 'In progress',
  },
  {
    id: '3',
    userId: '3',
    name: 'flash',
    description: 'A forum for all things flash related.',
    status: 'Done',
  },
];

module.exports = { subforums, users };
