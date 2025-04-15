const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

let currentToken = 100;

router.post('/', async (req, res) => {
  const { item, price, paymentMethod } = req.body;
  currentToken++;
  const newOrder = new Order({ item, price, paymentMethod, token: currentToken });
  await newOrder.save();
  res.status(201).json(newOrder);
});

router.get('/', async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

router.get('/:token', async (req, res) => {
  const order = await Order.findOne({ token: req.params.token });
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

module.exports = router;
