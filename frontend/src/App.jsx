import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  const location = useLocation();
  // Check if the current URL contains the word "owner"
  const isOwnerPath = location.pathname.includes('owner');

  return (
    <div>
      {/* Hide Navbar if isOwnerPath is true */}
      {!isOwnerPath && <Navbar />}
      
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;