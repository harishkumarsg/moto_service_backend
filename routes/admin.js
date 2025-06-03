const express = require('express');
const Booking = require('../models/Booking');
const User = require('../models/User');
const router = express.Router();

// Get all bookings (admin)
router.get('/bookings', async (req, res) => {
  const bookings = await Booking.find().populate('user');
  res.json(bookings);
});

// Get all users (admin)
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
