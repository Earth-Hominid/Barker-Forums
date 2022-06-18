const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: { type: String },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  subforumId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subforum' },
  content: {
    type: String,
  },
  votes: {
    type: Number,
  },
  comments: {
    type: Array,
  },
});

module.exports = mongoose.model('Post', PostSchema);
