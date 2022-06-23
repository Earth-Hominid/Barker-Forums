const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    friends: { type: Array },
    createdSubforums: { type: Array },
    memberSubforums: { type: Array },
    createdPosts: { type: Array },
    savedPosts: { type: Array },
    createdComments: { type: Array },
    savedCommetns: { type: Array },
    postVoteCount: { type: Number },
    commentVoteCount: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
