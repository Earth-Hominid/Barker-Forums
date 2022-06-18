# Barker | GraphQL | Mutations & Queries

## Get all usernames

```
{
  users {
    username
  }
}
```

## Get single username and email

```
{
  user(id: 1) {
    username
    email
  }
}
```

## Get name and status of all subforums

```
{
  subforums {
    name
    status
  }
}
```

## Get a single subforum name, description along with the username and email

```
{
  subforum(id: 1) {
    name
    description,
    user {
      username
      email
    }
  }
}
```

## Create new user and return all of their data

```
mutation {
  addUser(username: "Ironman", email: "ironman@gmail.com", {
    id
    username
    email
    friends
    createdSubforums
    memberSubforums
    createPosts
    savedPosts
    createdComments
    savedComments
    postVoteCount
    commentVoteCount
  }
}
```

## Delete user and return id

```
mutation {
  deleteUser(id: 1) {
    id
  }
}
```

## Create a new subforum and return name and description

```
mutation {
  addSubforum(name: "Mobile App", description: "This is the project description", status: "new", clientId: "1") {
   name
   description
  }
}
```

## Update a subforum status and return name and status

```
mutation {
  updateSubforum(status: "completed") {
   name
   status
  }
}
```
