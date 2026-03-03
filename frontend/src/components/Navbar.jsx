import React from 'react';
import { useClerk, useUser, UserButton } from '@clerk/clerk-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  // Guard Clerk hooks: when no ClerkProvider is present they throw — catch and use fallbacks.
  let openSignIn = () => {};
  let user = null;
  let UserButtonComp = null;
  try {
    const clerk = useClerk();
    const u = useUser();
    openSignIn = clerk.openSignIn || (() => {});
    user = u?.user || null;
    UserButtonComp = UserButton;
  } catch (err) {
    // no Clerk provider available — continue with fallbacks
  }

  const navigate = useNavigate();
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  // intentionally minimal — kept markup accessible and keyboard-friendly

  return (
    <nav className="w-full bg-white dark:bg-gray-900 shadow-sm fixed top-0 left-0 z-40 transition-colors duration-300" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/')} className="text-lg font-bold text-[var(--color-primary)] focus-visible:ring-2 focus-visible:ring-offset-2">Hotelly</button>
            <div className="hidden md:flex items-center gap-4">
              <button onClick={() => navigate('/rooms')} aria-current={location.pathname === '/rooms' ? 'page' : undefined} className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Explore</button>
              <button onClick={() => navigate('/offers')} aria-current={location.pathname === '/offers' ? 'page' : undefined} className="text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">Offers</button>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {isDark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              )}
            </button>
            {user ? (
              <>
                <button onClick={() => navigate('/owner')} className="text-sm px-3 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">Dashboard</button>
                {UserButtonComp ? <UserButtonComp /> : null}
              </>
            ) : (
              <button onClick={() => openSignIn()} className="btn-primary text-white px-4 py-2 rounded-full">Login</button>
            )}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="p-2 rounded-md focus-visible:ring-2"
            >
              {open ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.5"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5"/></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800 transition-colors duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => { setOpen(false); navigate('/rooms'); }} className="block w-full text-left px-3 py-2 rounded dark:hover:bg-gray-800">Explore</button>
            <button onClick={() => { setOpen(false); navigate('/offers'); }} className="block w-full text-left px-3 py-2 rounded dark:hover:bg-gray-800">Offers</button>
            <button
              onClick={() => toggleTheme()}
              className="block w-full text-left px-3 py-2 rounded dark:hover:bg-gray-800 flex items-center gap-2"
            >
              {isDark ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>
                  Light Mode
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-gray-600"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                  Dark Mode
                </>
              )}
            </button>
            {user ? (
              <>
                <button onClick={() => { setOpen(false); navigate('/owner'); }} className="block w-full text-left px-3 py-2 rounded dark:hover:bg-gray-800">Dashboard</button>
                <div className="px-3 py-2">{UserButtonComp ? <UserButtonComp /> : null}</div>
              </>
            ) : (
                <button onClick={() => { setOpen(false); openSignIn(); }} className="block w-full text-left px-3 py-2 rounded text-white btn-primary">Login</button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;