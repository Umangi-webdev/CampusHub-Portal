const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const Resource = require('../models/Resource');

// Upload endpoint
router.post('/upload', upload.single('document'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file received' });
    }

    const { title, department, semester, uploadedBy } = req.body;

    const resource = new Resource({
      title,
      department,
      semester,
      uploadedBy,
      fileName: req.file.originalname,
      filePath: `/uploads/${req.file.filename}`
    });

    await resource.save();
    res.status(201).json({ message: 'File uploaded successfully', data: resource });
  } catch (error) {
    console.error('Upload Error in Route:', error);
    res.status(500).json({ error: error.message });
  }
});

// Fetch endpoint
router.get('/', async (req, res) => {
  try {
    const { department, semester } = req.query;
    let query = {};
    if (department) query.department = department;
    if (semester) query.semester = semester;

    const resources = await Resource.find(query).sort({ createdAt: -1 });
    res.json(resources);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;