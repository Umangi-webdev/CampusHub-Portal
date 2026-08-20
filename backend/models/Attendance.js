const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  studentId: { type: String, required: true },
  department: { type: String, required: true },
  semester: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ['Present', 'Absent'], default: 'Present' }
});

module.exports = mongoose.model('Attendance', attendanceSchema);