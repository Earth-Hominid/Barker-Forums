// Mongoose models
const User = require('../models-fourm/User');
const Subforum = require('../models-fourm/Subforum');
const Post = require('../models-fourm/Post');
const Comment = require('../models-fourm/Comment');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = require('graphql');

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    // friends: { type: GraphQLList },
    // createdSubforums: { type: GraphQLList },
    // createdComments: { type: GraphQLList },
    // savedPosts: { type: GraphQLList },
    // postVoteCount: { type: GraphQLInt },
  }),
});

// Subforum Type - userId will be UserType to create relationship
const SubforumType = new GraphQLObjectType({
  name: 'Subforum',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    user: {
      type: UserType,
      resolve(parent, args) {
        return users.findById(parent.userId);
      },
    },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    // posts: { type: GraphQLList },
    votes: { type: GraphQLInt },
  }),
});

// Post type
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
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
    votes: { type: GraphQLInt },
    posts: { type: GraphQLList },
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
    post: {
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
