const express = require('express');
const router = express.Router();
const Result = require('../models/Result');

// Fetch toppers with exact department and semester filters
router.get('/', async (req, res) => {
  try {
    const { department, semester } = req.query;
    let query = {};

    if (department && department !== '') query.department = department;
    if (semester && semester !== '') query.semester = semester;

    const results = await Result.find(query).sort({ cgpa: -1 });
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const { studentName, enrollmentNo, department, semester, cgpa, rank } = req.body;
    const newResult = new Result({ studentName, enrollmentNo, department, semester, cgpa, rank });
    await newResult.save();
    res.status(201).json({ message: 'Result added successfully', data: newResult });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;