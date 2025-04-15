"use client"
import React, { useState } from 'react';
import axios from 'axios';

const menuItems = [
  { name: 'Veg Sandwich', price: 40 },
  { name: 'Paneer Wrap', price: 60 },
  { name: 'Cold Coffee', price: 30 },
];

export default function Menu() {
  const [paymentMethod, setPaymentMethod] = useState('UPI');
  const [status, setStatus] = useState('');

  const placeOrder = async (item) => {
    const res = await axios.post('http://localhost:5000/api/orders', {
      item: item.name,
      price: item.price,
      paymentMethod,
    });
    setStatus(`Order placed! Your token number is ${res.data.token}`);
  };

  return (
    <div className='container'>
      <h2>Menu</h2>
      {menuItems.map((item) => (
        <div key={item.name}>
          <span>{item.name} - ₹{item.price}</span>
          <button onClick={() => placeOrder(item)}>Order</button>
        </div>
      ))}
      <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
        <option value='UPI'>UPI</option>
        <option value='Wallet'>Wallet</option>
        <option value='Card'>Card</option>
      </select>
      <p>{status}</p>
    </div>
  );
}
