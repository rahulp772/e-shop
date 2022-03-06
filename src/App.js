import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='*' element={<div>No Route Found</div>} />
      </Routes>
    </div>
  );
}

export default App;