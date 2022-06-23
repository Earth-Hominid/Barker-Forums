// Mongoose Models
const User = require('../models/User');
const Subforum = require('../models/Subforum');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const Vote = require('../models/Vote');

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

//Subforum Type
const SubforumType = new GraphQLObjectType({
  name: 'Subforum',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    members: { type: new GraphQLList(UserType) },
    userId: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      },
    },
    posts: { type: new GraphQLList(PostType) },
  }),
});

// Post Type
const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    content: { type: GraphQLString },
    votes: { type: GraphQLInt },
    comments: { type: GraphQLList(CommentType) },
    subforumId: {
      type: SubforumType,
      resolve(parent, args) {
        return Subforum.findById(parent.subforumId);
      },
    },
    userId: {
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
    votes: { type: GraphQLInt },
    subforumId: {
      type: SubforumType,
      resolve(parent, args) {
        return Subforum.findById(parent.subforumId);
      },
    },
    userId: {
      type: UserType,
      resolve(parent, args) {
        return User.findById(parent.userId);
      },
    },
    postId: {
      type: PostType,
      resolve(parent, args) {
        return Post.findById(parent.postId);
      },
    },
  }),
});

// Vote schema
const VoteType = new GraphQLObjectType({
  name: 'Vote',
  fields: () => ({
    id: { type: GraphQLID },
    upvote: { type: GraphQLBoolean },
    downvote: { type: GraphQLBoolean },
    userId: {
      type: UserType,
      resolve(parent, args) {
        return users.findById(parent.userId);
      },
    },
    subforumId: {
      type: SubforumType,
      resolve(parent, args) {
        return subforums.findById(parent.subforumId);
      },
    },
    postId: {
      type: PostType,
      resolve(parent, args) {
        return posts.findById(parent.postId);
      },
    },
    commentId: {
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
        return Post.findById(args.id);
      },
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find();
      },
    },
    comment: {
      type: CommentType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Comment.findById(args.id);
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
    // Add a user
    addUser: {
      type: UserType,
      args: {
        username: { type: GraphQLNonNull(GraphQLString) },
        email: { type: GraphQLNonNull(GraphQLString) },
        friends: { type: GraphQLList(GraphQLString) },
        createdSubforums: { type: GraphQLList(GraphQLString) },
        memberSubforums: { type: GraphQLList(GraphQLString) },
        createdPosts: { type: GraphQLList(GraphQLString) },
        savedPosts: { type: GraphQLList(GraphQLString) },
        createdComments: { type: GraphQLList(GraphQLString) },
        savedComments: { type: GraphQLList(GraphQLString) },
        postVoteCount: { type: GraphQLInt },
        commentVoteCount: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const user = new User({
          username: args.username,
          email: args.email,
          friends: args.friends,
        });
        return user.save();
      },
    },
    // Delete a user
    deleteUser: {
      type: UserType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return User.findByIdAndRemove(args.id);
      },
    },
    // Update a user
    updateUser: {
      type: UserType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        friends: { type: GraphQLList(GraphQLString) },
        createdSubforums: { type: GraphQLList(GraphQLString) },
        memberSubforums: { type: GraphQLList(GraphQLString) },
        createdPosts: { type: GraphQLList(GraphQLString) },
        savedPosts: { type: GraphQLList(GraphQLString) },
        createdComments: { type: GraphQLList(GraphQLString) },
        savedComments: { type: GraphQLList(GraphQLString) },
        postVoteCount: { type: GraphQLInt },
        commentVoteCount: { type: GraphQLInt },
      },
      resolve(parent, args) {
        return User.findByIdAndUpdate(args.id, {
          $set: {
            username: args.username,
            email: args.email,
            friends: args.friends,
            createdSubforums: args.createdSubforums,
            memberSubforums: args.memberSubforums,
            createdPosts: args.createdPosts,
            savedPosts: args.savedPosts,
            createdComments: args.createdComments,
            savedComments: args.savedComments,
            postVoteCount: args.postVoteCount,
            commentVoteCount: args.commentVoteCount,
          },
        });
      },
    },
    // Add a Subforum
    addSubforum: {
      type: SubforumType,
      args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        description: { type: GraphQLNonNull(GraphQLString) },
        userId: { type: GraphQLNonNull(GraphQLID) },
        members: { type: GraphQLList(GraphQLString) },
        posts: { type: GraphQLList(GraphQLString) },
      },
      resolve(parent, args) {
        const subforum = new Subforum({
          name: args.name,
          description: args.description,
          userId: args.userId,
          members: args.members,
          posts: args.posts,
        });
        return subforum.save();
      },
    },
    // Delete a Subforum
    deleteSubforum: {
      type: SubforumType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Subforum.findByIdAndRemove(args.id);
      },
    },
    // Update Subforum
    updateSubforum: {
      type: SubforumType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        members: { type: GraphQLList(GraphQLString) },
        posts: { type: GraphQLList(GraphQLString) },
      },
      resolve(parent, args) {
        return Subforum.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              members: args.members,
              posts: args.posts,
            },
          },
          { new: true }
        );
      },
    },
    // Add a post
    addPost: {
      type: PostType,
      args: {
        title: { type: GraphQLNonNull(GraphQLString) },
        content: { type: GraphQLNonNull(GraphQLString) },
        votes: { type: GraphQLInt },
        comments: { type: GraphQLList(GraphQLString) },
        subforumId: { type: GraphQLNonNull(GraphQLID) },
        userId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const post = new Post({
          title: args.title,
          content: args.content,
          votes: args.votes,
          comments: args.comments,
          subforumId: args.subforumId,
          userId: args.userId,
        });
        return post.save();
      },
    },
    // Delete a post
    deletePost: {
      type: PostType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Post.findByIdAndRemove(args.id);
      },
    },
    // Update a post
    updatePost: {
      type: PostType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Post.findByIdAndUpdate(
          args.id,
          {
            $set: {
              title: args.title,
              content: args.content,
            },
          },
          { new: true }
        );
      },
    },
    // Add a comment
    addComment: {
      type: CommentType,
      args: {
        content: { type: GraphQLNonNull(GraphQLString) },
        votes: { type: GraphQLInt },
        subforumId: { type: GraphQLNonNull(GraphQLID) },
        userId: { type: GraphQLNonNull(GraphQLID) },
        postId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const comment = new Comment({
          content: args.content,
          votes: args.votes,
          subforumId: args.subforumId,
          userId: args.userId,
          postId: args.postId,
        });
        return comment.save();
      },
    },
    // Delete a comment
    deleteComment: {
      type: CommentType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Comment.findByIdAndRemove(args.id);
      },
    },
    // Update a comment
    updateComment: {
      type: CommentType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        content: { type: GraphQLString },
      },
      resolve(parent, args) {
        return Comment.findByIdAndUpdate(
          args.id,
          {
            $set: {
              content: args.content,
            },
          },
          { new: true }
        );
      },
    },
    // Add a vote
    addVote: {
      type: VoteType,
      args: {
        upvote: { type: GraphQLBoolean },
        downvote: { type: GraphQLBoolean },
        subforumId: { type: GraphQLNonNull(GraphQLID) },
        userId: { type: GraphQLNonNull(GraphQLID) },
        postId: { type: GraphQLNonNull(GraphQLID) },
        commentId: { type: GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const vote = new Vote({
          upvote: args.upvote,
          downvote: args.downvote,
          subforumId: args.subforumId,
          userId: args.userId,
          postId: args.postId,
          commentId: args.commentId,
        });
        return vote.save();
      },
    },
    // Delete a vote
    deleteVote: {
      type: VoteType,
      args: { id: { type: GraphQLNonNull(GraphQLID) } },
      resolve(parent, args) {
        return Vote.findByIdAndRemove(args.id);
      },
    },
    // Update a vote
    updateVote: {
      type: VoteType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        upvote: { type: GraphQLNonNull(GraphQLBoolean) },
        downvote: { type: GraphQLNonNull(GraphQLBoolean) },
      },
      resolve(parent, args) {
        return Vote.findByIdAndUpdate(
          args.id,
          {
            $set: {
              upvote: args.upvote,
              downvote: args.downvote,
            },
          },
          { new: true }
        );
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});
