import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const Hero = () => {
  const [destination, setDestination] = useState('');
  const { navigate, axios, getToken, setSearchedCities } = useAppContext();

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
    <form onSubmit={onSearch} className="bg-white p-6 rounded-lg shadow-lg flex gap-4 mt-8 items-center flex-col sm:flex-row">
      <label htmlFor="hero-destination" className="sr-only">Search destination</label>
      <input
        id="hero-destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
        list="cities"
        placeholder="Where to?"
        className="w-full sm:flex-1 outline-none border-b py-2 px-3"
        aria-label="Search destination"
      />
      <button type="submit" style={{backgroundColor: 'var(--color-primary)'}} className="text-white px-4 py-2 rounded-md w-full sm:w-auto mt-3 sm:mt-0">Search</button>
    </form>
  );
};

export default Hero;