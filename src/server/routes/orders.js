const express = require('express');
const router = express.Router();

const Order = require('../models/Order');
const Counter = require('../models/Counter');

router.post('/', async (req, res) => {
  try {
    const { item, price, paymentMethod } = req.body;

    // Get the next token number safely from MongoDB
    const counter = await Counter.findOneAndUpdate(
      { _id: 'orderToken' },
      { $inc: { sequence: 1 } },
      { new: true, upsert: true }
    );

    const newOrder = new Order({
      item,
      price,
      paymentMethod,
      token: counter.sequence
    });

    await newOrder.save();

    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

router.get('/:token', async (req, res) => {
  try {
    const order = await Order.findOne({ token: req.params.token });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error('Error finding order:', error);
    res.status(500).json({ error: 'Failed to find order' });
  }
});

module.exports = router;
