// Mongoose models
const User = require('../models-fourm/User');
const Subforum = require('../models-fourm/Subforum');
const Post = require('../models-fourm/Post');
const Comment = require('../models-fourm/Comment');
const Vote = require('../models-fourm/Vote');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean,
} = require('graphql');

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    friends: { type: GraphQLList },
    createdSubforums: { type: GraphQLList },
    memberSubforums: { type: GraphQLList },
    createdPosts: { type: GraphQLList },
    savedPosts: { type: GraphQLList },
    createdComments: { type: GraphQLList },
    savedComments: { type: GraphQLList },
    postVoteCount: { type: GraphQLInt },
    commentVoteCount: { type: GraphQLInt },
  }),
});

// Subforum Type - userId will be UserType to create relationship
const SubforumType = new GraphQLObjectType({
  name: 'Subforum',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    posts: { type: GraphQLList },
    user: {
      type: UserType,
      resolve(parent, args) {
        return users.findById(parent.userId);
      },
    },
    members: { type: GraphQLList },
  }),
});

// Post type
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    content: { type: GraphQLString },
    subforum: {
      type: SubforumType,
      resolve(parent, args) {
        return subforums.findById(parent.subforumId);
      },
    },
    user: {
      type: UserType,
      resolve(parent, args) {
        return users.findById(parent.userId);
      },
    },
    votes: { type: GraphQLInt },
    comments: { type: GraphQLList },
  }),
});

// Comment type
const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return users.findById(parent.userId);
      },
    },
    subforum: {
      type: SubforumType,
      resolve(parent, args) {
        return subforums.findById(parent.subforumId);
      },
    },
    post: {
      type: PostType,
      resolve(parent, args) {
        return posts.findById(parent.postId);
      },
    },
    votes: { type: GraphQLInt },
  }),
});

// Vote schema
const VoteType = new GraphQLObjectType({
  name: 'Vote',
  fields: () => ({
    id: { type: GraphQLID },
    upvote: { type: GraphQLBoolean },
    downvote: { type: GraphQLBoolean },
    user: {
      type: UserType,
      resolve(parent, args) {
        return users.findById(parent.userId);
      },
    },
    subforum: {
      type: SubforumType,
      resolve(parent, args) {
        return subforums.findById(parent.subforumId);
      },
    },
    post: {
      type: PostType,
      resolve(parent, args) {
        return posts.findById(parent.postId);
      },
    },
    comment: {
      type: CommentType,
      resolve(parent, args) {
        return comments.findById(parent.commentId);
      },
    },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    subforums: {
      type: new GraphQLList(SubforumType),
      resolve(parent, args) {
        return Subforum.find();
      },
    },
    subforum: {
      type: SubforumType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Subforum.findById(args.id);
      },
    },
    posts: {
      type: new GraphQLList(PostType),
      resolve(parent, args) {
        return Post.find();
      },
    },
    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Subforum.findById(args.id);
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return User.find();
      },
    },
    user: {
      type: UserType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return User.findById(args.id);
      },
    },
    votes: {
      type: new GraphQLList(VoteType),
      resolve(parent, args) {
        return Vote.find();
      },
    },
    vote: {
      type: VoteType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Vote.findById(args.id);
      },
    },
  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const user = new User({
          username: args.username,
          email: args.email,
        });
        return user.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
