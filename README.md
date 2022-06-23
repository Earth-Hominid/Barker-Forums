# Barker | Forums

![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)

Barker is a social forum platform that hosts numerous forums with users from all over the world.

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

## Dependencies

- [Tailwind Styled Components](https://www.npmjs.com/package/tailwind-styled-components)
