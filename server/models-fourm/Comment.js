const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  votes: {
    type: Number,
  },
  posts: {
    type: Array,
  },
});

module.exports = mongoose.model('Comment', CommentSchema);
