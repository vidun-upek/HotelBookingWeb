import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AppProvider } from './context/AppContext';
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const hasClerkKey = PUBLISHABLE_KEY && !PUBLISHABLE_KEY.includes('your_clerk_key');

if (!hasClerkKey) {
  console.warn('Clerk publishable key missing or invalid — running frontend without Clerk authentication.');
}

const AppRoot = (
  <React.StrictMode>
      {hasClerkKey ? (
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <BrowserRouter>
          <AppProvider>
            <App />
          </AppProvider>
        </BrowserRouter>
      </ClerkProvider>
    ) : (
      <BrowserRouter>
        <AppProvider>
          <App />
        </AppProvider>
      </BrowserRouter>
    )}
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(AppRoot);