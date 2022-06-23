const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    content: {
      type: String,
    },
    subforumId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subforum',
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    votes: {
      type: Number,
    },
    comments: {
      type: Array,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);
