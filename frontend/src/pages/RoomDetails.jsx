// Inside component
const checkAvailability = async () => {
  if (new Date(checkInDate) >= new Date(checkOutDate)) {
    return toast.error("Check-in date must be before check-out");
  }

  const { data } = await axios.post('/api/bookings/check-availability', {
    room: id, checkInDate, checkOutDate
  });

  if (data.success && data.isAvailable) {
    setIsAvailable(true);
    toast.success("Room is available!");
  } else {
    setIsAvailable(false);
    toast.error("Room is not available for these dates");
  }
};

const handleBooking = async (e) => {
  e.preventDefault();
  if (!isAvailable) return checkAvailability();

  const token = await getToken();
  const { data } = await axios.post('/api/bookings/book', 
    { room: id, checkInDate, checkOutDate, guests },
    { headers: { Authorization: `Bearer ${token}` } }
  );

  if (data.success) {
    toast.success(data.message);
    navigate('/my-bookings');
  }
};