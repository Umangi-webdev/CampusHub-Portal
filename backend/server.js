const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// 1. Enable CORS for frontend requests
app.use(cors({
  origin: [
    'https://hub-portal.vercel.app',
    'http://localhost:5173',
    'http://localhost:3000',
    'http://127.0.0.1:5500'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 2. Parse JSON
app.use(express.json());

// 3. Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

// Health check / Test route
app.get('/', (req, res) => {
  res.send('CampusHub Backend API is Running');
});

// 4. Connect MongoDB
mongoose.connect(process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/campusdiary')
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((err) => console.error('DB Connection Error:', err));

// 5. Mount Routes
app.use('/api/attendance', require('./routes/attendanceRoutes'));
app.use('/api/resources', require('./routes/resourceRoutes'));
app.use('/api/results', require('./routes/resultRoutes'));
app.use('/api/activities', require('./routes/activityRoutes'));
app.use('/api/timetable', require('./routes/timetableRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));