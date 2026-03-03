import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();
  const { axios, getToken, setSearchedCities } = useAppContext();

  const onSearch = async (e) => {
    e.preventDefault();
    navigate(`/rooms?destination=${destination}`);

    try {
      const token = await getToken();
      await axios.post('/api/user/store-recent-search', 
        { recentSearchCity: destination },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setSearchedCities(prev => {
        const updated = [destination, ...prev.filter(c => c !== destination)].slice(0, 3);
        return updated;
      });
    } catch (error) {
      console.error("Search history error:", error.message);
    }
  };

  return (
    <form onSubmit={onSearch} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex gap-4 mt-8 items-center flex-col sm:flex-row transition-colors duration-300">
      <label htmlFor="hero-destination" className="sr-only">Search destination</label>
      <input
        id="hero-destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        list="cities"
        placeholder="Where to?"
        className="w-full sm:flex-1 outline-none border-b py-2 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-600"
        aria-label="Search destination"
      />
      <button type="submit" className="btn-primary text-white px-4 py-2 rounded-md w-full sm:w-auto mt-3 sm:mt-0">Search</button>
    </form>
  );
};

export default Hero;