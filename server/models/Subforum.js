const mongoose = require('mongoose');

const SubforumSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
  },
  posts: {
    type: Array,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  members: {
    type: Array,
  },
});

module.exports = mongoose.model('Subforum', SubforumSchema);
