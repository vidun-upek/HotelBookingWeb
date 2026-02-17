import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { useUser, useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const currency = import.meta.env.VITE_CURRENCY || "$";
  
  const { user } = useUser();
  const { getToken } = useAuth();

  const [isOwner, setIsOwner] = useState(false);
  const [showHotelRegistration, setShowHotelRegistration] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [searchedCities, setSearchedCities] = useState([]);

  // Set Axios Base URL
  axios.defaults.baseURL = backendUrl;

  const fetchUser = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get("/api/user/data", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        setIsOwner(data.role === "hotel-owner");
        setSearchedCities(data.recentSearchCities);
      } else {
        setTimeout(fetchUser, 5000); // Retry logic
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const fetchRooms = async () => {
    try {
      const { data } = await axios.get("/api/rooms");
      if (data.success) {
        setRooms(data.rooms);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);

  const value = {
    backendUrl,
    currency,
    user,
    getToken,
    isOwner,
    setIsOwner,
    showHotelRegistration,
    setShowHotelRegistration,
    rooms,
    setRooms,
    searchedCities,
    setSearchedCities,
    axios,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);