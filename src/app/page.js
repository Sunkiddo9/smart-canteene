"use client"
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/page';
import Menu from './menu/page';
import TrackOrder from './trackorder/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/track' element={<TrackOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
