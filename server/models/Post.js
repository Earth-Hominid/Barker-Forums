const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
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
