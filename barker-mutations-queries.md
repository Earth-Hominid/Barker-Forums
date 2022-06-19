# Barker | GraphQL | Mutations & Queries

## USERS

### Get all usernames

```
{
  users {
    username
  }
}
```

### Get single username and email

```
{
  user(id: 1) {
    username
    email
  }
}
```

### Create new user and return all of their data

```
mutation {
  addUser(username: "Ironman", email: "ironman@gmail.com"), {
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

## SUBFORUMS

### Get all subforums, with name, id and creator's user name and email

```
{
  subforums {
		name
    description
    userId {
      username
    	email
    }
  }
}
```

### Get a single subforum name, description along with the username and email of the creator.

```
{
  subforum( id: "62af4b9f5b3a0993e1b2ab6b" ) {
		name
    description
    userId {
      username
    	email
    }
  }
}
```

### Create a new subforum and return name and description

```
mutation {
  addSubforum(name: "Nutrition", description: "This is a subforum description",  userId: "62af3894170848495432d1eb") {
   name
   description
  }
}
```

### Update a subforum name and return name and return name & description

```
mutation {
  updateSubforum(
    id: "62af8e694bb40a68c7285c9a"
    name: "Nutrition Update Has been updated",
    description: "This is a subforum description"
    userId: "62af3894170848495432d1eb") {
   name
   description
  }
}
```

## POSTS

### Add a Post and return info:

```
mutation {
  addPost(
    title: "Give a dog a new bone",
    content: "Rolling home",
    votes: 10011,
  	subforumId: "62af4b9f5b3a0993e1b2ab6b",
  	userId: "62af3894170848495432d1eb",
  ) {
    title
  	content
    votes
    comments {id}
    subforumId {id}
    userId {id}

  }
}
```

### Delete a post

```
mutation {
  deletePost(
   id: "62af7319731cf0e050eb0267"
  ) {
    id
    title
  }
}
```

### Update a post

```
mutation {
  updatePost(
    id: "62af728e731cf0e050eb0263"
    title: "Updated Post",
    content: "I have been updated content.") {
   title
   content
  	userId {
      username
      email
    }
    subforumId {
      name
      description
    }
  }
}

```

## COMMENTS

### Add a new comment

```
mutation {
  addComment(
    content: "Great advice!",
    votes: 12,
    userId: "62af3894170848495432d1eb",
    subforumId: "62af4b9f5b3a0993e1b2ab6b",
    postId: "62af725d731cf0e050eb0261",
  ) {
    id
    content
    userId {id}
    subforumId {id}
    postId {id}
    votes
  }
}
```

### Delete a comment

```
mutation {
  deleteComment(
   id: "62af7851a60285790d85146a"
  ) {
    id
  }
}
```
