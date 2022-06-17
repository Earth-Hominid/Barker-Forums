// Mongoose models
const User = require('../models/User');
const Subforum = require('../models/Subforum');

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
    friends: {type: GraphQLList},
    createdSubforums: {type: GraphQLList},
    createdComments: {type: GraphQLList},
    savedPosts: {type: GraphQLList},
    postVoteCount: {type: GraphQLInt},
  }),
});

// Subforum Type - userId will be UserType to create relationship
const SubforumType = new GraphQLObjectType({
  name: 'Subforum',
  fields: () => ({
    id: { type: GraphQLID },
    user: {
      type: UserType,
      resolve(parent, args) {
        return users.findById(parent.userId);
      },
    },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
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
        email: { type: GraphQLNonNull(GraphQLString)},
    },
    resolve()
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
