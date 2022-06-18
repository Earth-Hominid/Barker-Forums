const mongoose = require('mongoose');

const SubforumSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Not started', 'In progress', 'Completed'],
  },
  posts: {
    type: Array,
  },
  members: { type: Array },
});

module.exports = mongoose.model('Subforum', SubforumSchema);
