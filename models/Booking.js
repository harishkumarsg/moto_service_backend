const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  motorcycleModel: { type: String, required: true },
  serviceDate: { type: Date, required: true },
  contact: { type: String, required: true },
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Booking', BookingSchema);
