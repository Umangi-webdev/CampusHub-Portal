const mongoose = require('mongoose');
require('dotenv').config();

const Timetable = require('./models/Timetable');
const Result = require('./models/Result');
const Activity = require('./models/Activity');

async function seedData() {
  await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/campusdiary');

  // Clear existing
  await Timetable.deleteMany({});
  await Result.deleteMany({});
  await Activity.deleteMany({});

  // Seed Timetable
  await Timetable.insertMany([
    {
      department: 'Computer Engineering',
      semester: 'Sem 6',
      day: 'Monday',
      slot1: 'Distributed DBMS',
      slot2: 'Machine Learning',
      slot3: 'Web Tech',
      slot4: 'Compiler Design',
      labSlot: 'Full Stack Lab'
    },
    {
      department: 'Computer Engineering',
      semester: 'Sem 6',
      day: 'Tuesday',
      slot1: 'Machine Learning',
      slot2: 'Distributed DBMS',
      slot3: 'Compiler Design',
      slot4: 'Software Eng.',
      labSlot: 'ML Practical'
    }
  ]);

  // Seed Results
  await Result.insertMany([
    { studentName: 'Patel Umangi', enrollmentNo: '210120107001', department: 'Computer Engineering', semester: 'Sem 6', cgpa: 9.85, rank: 1 },
    { studentName: 'Aarav Shah', enrollmentNo: '210120107002', department: 'Computer Engineering', semester: 'Sem 6', cgpa: 9.62, rank: 2 },
    { studentName: 'Riya Trivedi', enrollmentNo: '210120107003', department: 'Computer Engineering', semester: 'Sem 6', cgpa: 9.45, rank: 3 }
  ]);

  // Seed Activities
  await Activity.insertMany([
    {
      title: 'Smart Gujarat Hackathon 2026',
      description: 'First prize winners for Disaster Duty Assignment System.',
      tag: 'Tech Achievement',
      eventDate: new Date('2026-09-12')
    },
    {
      title: 'Annual Sports League',
      description: 'Track and field qualifications starting next week.',
      tag: 'Sports Meet',
      eventDate: new Date('2026-09-28')
    }
  ]);

  console.log('Sample data seeded successfully!');
  process.exit();
}

seedData();