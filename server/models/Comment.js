const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
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
    votes: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Comment', CommentSchema);
