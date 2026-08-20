const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  enrollmentNo: { type: String, required: true, unique: true },
  department: { type: String, required: true },
  semester: { type: String, required: true },
  cgpa: { type: Number, required: true },
  rank: { type: Number, required: true }
});

module.exports = mongoose.model('Result', resultSchema);