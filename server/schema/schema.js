// Mongoose Models
const Subforum = require('../models/Subforum');
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
} = require('graphql');

//Subforum Type
const SubforumType = new GraphQLObjectType({
  name: 'Subforum',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    members: { type: new GraphQLList(UserType) },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      },
    },
    posts: { type: new GraphQLList(PostType) },
  }),
});

// User Type
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    friends: { type: GraphQLList(UserType) },
    createdSubforums: { type: GraphQLList(SubforumType) },
    memberSubforums: { type: GraphQLList(SubforumType) },
    createdPosts: { type: GraphQLList(PostType) },
    savedPosts: { type: GraphQLList(PostType) },
    createdComments: { type: GraphQLList(CommentType) },
    savedComments: { type: GraphQLList(CommentType) },
    postVoteCount: { type: GraphQLInt },
    commentVoteCount: { type: GraphQLInt },
  }),
});

// Post Type
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    votes: { type: GraphQLEnumType },
    comments: { type: GraphQLList(CommentType) },
    subforum: {
      type: SubforumType,
      resolve(parent, args) {
        return Subforum.findById(parent.subforumId);
      },
    },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      },
    },
  }),
});

// Comment Type
const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: GraphQLID },
    content: { type: GraphQLString },
    votes: { type: GraphQLEnumType },
    subforum: {
      type: SubforumType,
      resolve(parent, args) {
        return Subforum.findById(parent.subforumId);
      },
    },
    user: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      },
    },
    post: {
      type: PostType,
      resolve(parent, args) {
        return Post.findById(parent.postId);
      },
    },
  }),
});

// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {
//     subforums: {
//       type: new GraphQLList(SubforumType),
//       resolve(parent, args) {
//         return Subforum.find();
//       },
//     },
//     subforum: {
//       type: SubforumType,
//       ars: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         return Subforum.findById(args.id);
//       },
//     },
//     users: {
//       type: new GraphQLList(UserType),
//       resolve(parent, args) {
//         return User.find();
//       },
//     },
//     user: {
//       type: UserType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         return User.findById(args.id);
//       },
//     },
//   },
// });

// Mutations
// const mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     // Add user
//     addUser: {
//       type: UserType,
//       args: {
//         username: { type: GraphQLNonNull(GraphQLString) },
//         email: { type: GraphQLNonNull(GraphQLString) },
//       },
//       resolve(parent, args) {
//         const client = new Client({
//           username: args.username,
//           email: args.email,
//         });

//         return client.save();
//       },
//     },
//   },
// });

// module.exports = new GraphQLSchema({
//   query: RootQuery,
//   mutation,
// });
