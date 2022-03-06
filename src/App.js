import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => {
  let navigation = useNavigate();
  console.log(navigation);
  return <div>Hello from hatspage
    <Link to="/">My Profile</Link>
  </div>
}

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/hatspage' element={<HatsPage />} />
        <Route exact path='*' element={<div>No Route Found</div>} />
      </Routes>
    </div>
  );
}

export default App;