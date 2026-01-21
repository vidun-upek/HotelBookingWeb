# HotelBookingWeb
# QuickStay - Full Stack Hotel Booking Application

QuickStay is a modern, responsive full-stack hotel booking platform built using the **MERN** stack (MongoDB, Express, React, Node.js). The application allows users to search for hotels, view detailed room information, manage bookings, and process secure payments via Stripe.

## 🚀 Features

- **User Authentication:** Secure login and registration using **Clerk** (Google & Email).
- **Advanced Search:** Filter hotels by city, date, and guest count.
- **Dynamic Filtering:** Responsive sidebar to filter by Room Type, Price Range, and Sorting (Price/Newest).
- **Interactive Gallery:** Room details page with a dynamic image gallery.
- **Booking System:** Check availability and book rooms in real-time.
- **Secure Payments:** Integration with **Stripe** for test card transactions.
- **User Dashboard:** "My Bookings" page to track history and payment status.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop using **Tailwind CSS**.

## 🛠️ Tech Stack

**Frontend:**
- React.js (Vite)
- Tailwind CSS
- React Router DOM
- Clerk (Authentication)
- Lucide React (Icons)

**Backend (In Progress):**
- Node.js
- Express.js
- MongoDB (Mongoose)
- Stripe API (Payments)
- Cloudinary (Image Storage)

## 📁 Project Structure

```text
hotel-booking/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── assets/         # Images and dummy data
│   │   ├── components/     # Reusable UI (Navbar, HotelCard, etc.)
│   │   ├── pages/          # Page views (Home, AllRooms, RoomDetails)
│   │   └── App.jsx         # Routing logic
├── server/                 # Express Backend (Node.js)
└── .env                    # Environment variables (Clerk, Stripe, MongoDB)


