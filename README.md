# Barker | Forums

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)

Barker is a social forum platform that hosts numerous forums with users from all over the world.

### Features

Authentication, JWT, BCRYPT, Reddit, Google, Github

### Technology Choices

GraphQL used which prevents bog down issues (bandwidth, slower loadtimes, etc) caused by over fetching from the REST API.

### Interesting Problems

When first implementing mutation delete functions in React, I received the following error: "Cache data may be lost when replacing the users field of a Query object."

```js
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});
```

The cache above needed to be changed to:

```js
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        users: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        subforums: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        posts: {
          merge(existing, incoming) {
            return incoming;
          },
        },
        comments: {
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});
```

And Client needed to be changed to:

```js
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache,
});
```

### Dropdown Menu functionality with useRef Hook.

The drop down menu needs to close when the user clicks outside of the component. I was able to implement this functionality, however, when clicking within the drop down menu on a link, it would also close the drop down menu.

Furthermore, a TypeScript error "property 'current' does not exist on type 'HTMLElement" was occuring. I located a solution on Stack Overflow and used their suggested toggle function:

```js
const dropdownRef = useRef < HTMLElement > null;
const [openMenu, setOpenMenu] = useState(false);

const open = () => setOpenMenu(true);
const close = () => setOpenMenu(false);

const handleMenuClick = () => {
  if (openMenu) {
    close();
  } else {
    open();
  }
};

useEffect(() => {
  document.addEventListener('mousedown', toggle);
  return () => {
    document.removeEventListener('mousedown', toggle);
  };
}, []);

const toggle = (e: MouseEvent) => {
  const { current } = dropdownRef;
  if (current && !current.contains(e.target)) {
    setOpenMenu(false);
  }
};
```

## Dependencies

- [Tailwind Styled Components](https://www.npmjs.com/package/tailwind-styled-components)
- [NextAuth.js](https://next-auth.js.org/) used for authentication purposes.
- [React Hook Form](https://react-hook-form.com/)
- [Dicebear Avatars](https://avatars.dicebear.com/) used to generate the avatars.
