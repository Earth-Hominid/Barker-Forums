const mongoose = require('mongoose');

const SubforumSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
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
  },
  { timestamps: true }
);

module.exports = mongoose.model('Subforum', SubforumSchema);
