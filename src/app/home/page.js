import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='container'>
      <h1>Welcome to Smart Canteen</h1>
      <p>Order online, skip the queue, and track your food in real time.</p>
      <Link to='/menu'>Go to Menu</Link>
    </div>
  );
}
