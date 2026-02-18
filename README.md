QuickStay – Full-Stack Hotel Booking Platform
QuickStay is a production-ready, full-stack hotel booking application built using the MERN (MongoDB, Express, React, Node.js) stack. The platform provides a seamless experience for users to discover and book rooms, while offering a robust dashboard for hotel owners to manage their properties, track revenue, and handle room availability in real-time.

🚀 Key Features
For Users
Dynamic Search & Recommendations: Search for rooms by city and receive personalized hotel recommendations based on your recent search history.

Live Availability Checking: Real-time validation of room availability based on selected check-in and check-out dates.

Secure Stripe Payments: Integrated Stripe payment gateway for seamless online transactions with instant booking status updates via webhooks.

Automated Email Confirmations: Receive professional booking summaries via email (Nodemailer + Brevo) immediately after a successful transaction.

Search History Tracking: The system stores and displays your last three unique city searches to improve discovery.

For Hotel Owners (Admin)
Property Registration: Integrated workflow for users to list their hotels, which automatically upgrades their account role to "Hotel Owner".

Room Management: Detailed form for adding rooms with multi-image upload capabilities and customizable amenities.

Live Analytics Dashboard: View total bookings, total revenue, and a list of recent guest stays at a glance.

Availability Toggling: Quick-action buttons to enable or disable room listings from the public view.

🛠️ Tech Stack
Frontend
React.js & Vite: High-performance frontend development.

Tailwind CSS: Modern, responsive UI/UX design.

Clerk: Secure user authentication and profile management.

Context API: Centralized state management for global application logic.

Axios: Efficient handling of asynchronous API requests.

Backend
Node.js & Express: Scalable backend architecture.

MongoDB Atlas: Distributed NoSQL database with Mongoose ODM.

Cloudinary: Cloud-based image storage and transformation.

Stripe: Secure payment processing logic.

Svix: Secure verification of Clerk webhooks.

Nodemailer: Server-side email delivery system.

📂 Project Structure
Plaintext
hotel-booking/
├── frontend/             # React application (Vite)
│   ├── src/
│   │   ├── components/   # Reusable UI parts
│   │   ├── context/      # AppContext logic
│   │   ├── pages/        # Main route views
│   │   └── assets/       # Static files and dummy data
├── backend/              # Node.js API
│   ├── config/           # DB & Service configurations
│   ├── controllers/      # Route handler functions
│   ├── middleware/       # Auth & Upload logic
│   ├── models/           # MongoDB Schemas
│   └── routes/           # Express API endpoints
⚙️ Installation & Setup
1. Clone the repository
Bash
git clone https://github.com/vidun-upek/HotelBookingWeb.git
cd HotelBookingWeb
2. Backend Setup
Create a .env file in the backend/ folder.

Add the following keys:

Code snippet
MONGODB_URI=your_mongodb_uri
CLERK_SECRET_KEY=your_clerk_secret
CLOUDINARY_CLOUD_NAME=your_name
STRIPE_SECRET_KEY=your_stripe_secret
SMTP_PASS=your_brevo_password
Install dependencies and start the server:

Bash
cd backend
npm install
npm run server
3. Frontend Setup
Create a .env file in the frontend/ folder.

Add your keys:

Code snippet
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_key
VITE_BACKEND_URL=http://localhost:4000
Install dependencies and start development mode:

Bash
cd frontend
npm install
npm run dev
🌟 New Implementation Highlights
Webhook Synchronization: High-fidelity user data syncing between Clerk and MongoDB using Svix and Express.

Night-Based Pricing: Automated backend logic that calculates the total stay price based on the ceiling of the time difference between dates.

Role-Based UI: Dynamic Navbar and Page Layouts that adapt instantly based on the user's isOwner status.

Developed with ❤️ by Vidun Shanuka [cite: 12-24-2025]


