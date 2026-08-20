const express = require('express');
const router = express.Router();
const Timetable = require('../models/Timetable');

// Fetch timetable entries matching department and semester
router.get('/', async (req, res) => {
  try {
    const { department, semester } = req.query;
    const query = {};
    if (department) query.department = department;
    if (semester) query.semester = semester;

    const schedule = await Timetable.find(query);
    res.json(schedule);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Seed/Add timetable entries
router.post('/', async (req, res) => {
  try {
    const newEntry = new Timetable(req.body);
    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;