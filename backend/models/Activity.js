const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  tag: { type: String, default: 'Campus Event' },
  eventDate: { type: Date, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Activity', activitySchema);