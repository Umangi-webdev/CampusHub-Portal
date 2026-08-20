const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');

// Get all activities sorted by upcoming date
router.get('/', async (req, res) => {
  try {
    const activities = await Activity.find().sort({ eventDate: 1 });
    res.json(activities);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Post a new activity or achievement
router.post('/', async (req, res) => {
  try {
    const { title, description, tag, eventDate } = req.body;
    const newActivity = new Activity({ title, description, tag, eventDate });
    await newActivity.save();
    res.status(201).json({ message: 'Activity added successfully', data: newActivity });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;