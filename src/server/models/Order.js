const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  item: String,
  price: Number,
  paymentMethod: String,
  token: Number,
  status: { type: String, default: 'Preparing' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
    