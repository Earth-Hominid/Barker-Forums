const mongoose = require('mongoose');

const VoteSchema = new mongoose.Schema(
  {
    upvote: Boolean,
    downvote: Boolean,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
    subforumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subforum',
    },
    commentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Vote', VoteSchema);
