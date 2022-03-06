import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header-component';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shop.component';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='*' element={<div>No Route Found</div>} />
      </Routes>
    </div>
  );
}

export default App;