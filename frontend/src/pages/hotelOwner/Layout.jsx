import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/hotelOwner/Sidebar';
import Navbar from '../../components/hotelOwner/Navbar';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;