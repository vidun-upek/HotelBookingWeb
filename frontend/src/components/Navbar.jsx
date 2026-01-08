import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  // Book Icon SVG (Extracted from assets as per tutorial)
  const BookIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      {/* SVG Path from your assets.js */}
    </svg>
  );

  return (
    <nav>
      {/* ... other nav code ... */}
      
      {user ? (
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action 
              label="My Bookings" 
              labelIcon={<BookIcon />} 
              onClick={() => navigate('/my-bookings')} 
            />
          </UserButton.MenuItems>
        </UserButton>
      ) : (
        <button onClick={() => openSignIn()} className="bg-primary text-white px-6 py-2 rounded-full">
          Login
        </button>
      )}

      {/* Dashboard button - only visible to logged in users */}
      {user && (
        <button onClick={() => navigate('/owner')} className="ml-4">
          Dashboard
        </button>
      )}
    </nav>
  );
};

export default Navbar;