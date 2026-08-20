const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');

// 1. Get attendance records (with optional date, studentId, or department filter)
router.get('/', async (req, res) => {
  try {
    const { date, studentId, department } = req.query;
    let query = {};

    if (date) {
      const targetDate = new Date(date);
      const startOfDay = new Date(targetDate.setHours(0, 0, 0, 0));
      const endOfDay = new Date(targetDate.setHours(23, 59, 59, 999));
      query.date = { $gte: startOfDay, $lte: endOfDay };
    }

    if (studentId) query.studentId = studentId.trim();
    if (department) query.department = department;

    const records = await Attendance.find(query).sort({ date: -1 });
    res.json(records);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 2. Submit attendance with custom date support
router.post('/', async (req, res) => {
  try {
    const { studentId, department, semester, date } = req.body;
    const newRecord = new Attendance({
      studentId: studentId.trim(),
      department,
      semester,
      date: date ? new Date(date) : new Date()
    });
    await newRecord.save();
    res.status(201).json({ message: 'Attendance logged successfully', data: newRecord });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;