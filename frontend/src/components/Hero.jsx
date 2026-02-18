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
    <form onSubmit={onSearch} className="bg-white p-6 rounded-lg shadow-lg flex gap-4 mt-8">
      <input 
        value={destination} 
        onChange={(e) => setDestination(e.target.value)}
        list="cities" placeholder="Where to?" className="outline-none border-b"
      />
      <button type="submit" className="bg-primary p-3 rounded-md">Search</button>
    </form>
  );
};

export default Hero;