const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String, required: true },
  semester: { type: String, required: true },
  uploadedBy: { type: String, required: true },
  filePath: { type: String, required: true },
  fileName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resource', resourceSchema);