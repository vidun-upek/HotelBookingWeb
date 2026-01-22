import React from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  const sidebarLinks = [
    { name: 'Dashboard', path: '/owner', icon: assets.dashboard_icon },
    { name: 'Add Room', path: '/owner/add-room', icon: assets.add_icon },
    { name: 'List Room', path: '/owner/list-room', icon: assets.list_icon },
  ];

  return (
    <div className="w-1/4 min-h-screen border-r bg-white p-6 hidden md:block">
      <div className="flex flex-col gap-4">
        {sidebarLinks.map((item, index) => (
          <NavLink 
            key={index} 
            to={item.path} 
            end 
            className={({ isActive }) => `flex items-center gap-4 p-4 rounded-xl transition-all ${isActive ? 'bg-primary/10 text-primary border-r-4 border-primary' : 'text-gray-500 hover:bg-gray-50'}`}
          >
            <img src={item.icon} className="h-5 w-5" alt={item.name} />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;