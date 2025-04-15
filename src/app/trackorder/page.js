"use client"
import React, { useState } from 'react';
import axios from 'axios';

export default function TrackOrder() {
  const [token, setToken] = useState('');
  const [order, setOrder] = useState(null);

  const fetchOrder = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/orders/${token}`);
      setOrder(res.data);
    } catch {
      setOrder({ error: 'Not found' });
    }
  };

  return (
    <div className='container'>
      <h2>Track Your Order</h2>
      <input
        type='text'
        placeholder='Enter Token Number'
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />
      <button onClick={fetchOrder}>Track</button>
      {order && (
        <div>
          {order.error ? (
            <p>{order.error}</p>
          ) : (
            <p>Order: {order.item} - Status: {order.status}</p>
          )}
        </div>
      )}
    </div>
  );
}
