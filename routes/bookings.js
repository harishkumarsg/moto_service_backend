const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// POST /api/bookings - create new booking
router.post('/', async (req, res) => {
  try {
    console.log('Received data:', req.body);  // Debug log

    const { name, motorcycleModel, serviceDate, contact } = req.body;

    const newBooking = new Booking({
      name,
      motorcycleModel,
      serviceDate,
      contact,
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking saved successfully!' });
  } catch (error) {
    console.error('Error saving booking:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/bookings/stats - get booking counts grouped by month
router.get('/stats', async (req, res) => {
  try {
    const stats = await Booking.aggregate([
      {
        $group: {
          _id: { $month: '$serviceDate' },
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: 1 } }
    ]);
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
