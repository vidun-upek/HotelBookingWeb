import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import HotelCard from '../components/HotelCard';

const AllRooms = () => {
  const { rooms, currency } = useAppContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedFilters, setSelectedFilters] = useState({ roomType: [], priceRange: [] });
  const [selectedSort, setSelectedSort] = useState('');

  const matchesRoomType = (room) => {
    if (selectedFilters.roomType.length === 0) return true;
    return selectedFilters.roomType.includes(room.roomType);
  };

  const matchesPriceRange = (room) => {
    if (selectedFilters.priceRange.length === 0) return true;
    return selectedFilters.priceRange.some(range => {
      const [min, max] = range.split(' - ').map(Number);
      return room.pricePerNight >= min && (max ? room.pricePerNight <= max : true);
    });
  };

  const filteredRooms = useMemo(() => {
    let result = rooms.filter(room => matchesRoomType(room) && matchesPriceRange(room));
    
    if (selectedSort === 'Price: Low to High') result.sort((a, b) => a.pricePerNight - b.pricePerNight);
    if (selectedSort === 'Price: High to Low') result.sort((a, b) => b.pricePerNight - a.pricePerNight);
    if (selectedSort === 'Newest First') result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return result;
  }, [rooms, selectedFilters, selectedSort]);

  return (
    <div className="container mx-auto px-4 py-10 pt-24 flex flex-col lg:flex-row gap-10">
      {/* ... UI mapping over filteredRooms ... */}
    </div>
  );
};

export default AllRooms;