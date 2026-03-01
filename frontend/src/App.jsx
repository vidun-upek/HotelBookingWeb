import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AllRooms from './pages/AllRooms';

const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes('owner');

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {!isOwnerPath && <Navbar />}
        
        <div className="min-h-screen pt-20"> {/* Added pt-20 to prevent content from hiding behind sticky navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<AllRooms />} />
          </Routes>
        </div>

        {!isOwnerPath && <Footer />}
      </div>
    </ThemeProvider>
  );
};

export default App;