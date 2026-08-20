const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  department: { type: String, required: true },
  semester: { type: String, required: true },
  day: { type: String, required: true },
  slot1: { type: String, default: '-' },
  slot2: { type: String, default: '-' },
  slot3: { type: String, default: '-' },
  slot4: { type: String, default: '-' },
  labSlot: { type: String, default: '-' }
});

module.exports = mongoose.model('Timetable', timetableSchema);