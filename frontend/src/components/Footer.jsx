import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fa] dark:bg-gray-900 py-16 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col gap-6">
            <img 
              src={assets.logo} 
              className="h-10 w-fit invert dark:invert-0 opacity-80" 
              alt="QuickStay Logo" 
            />
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
              Your ultimate companion for finding the perfect stay. Experience luxury and comfort at your fingertips.
            </p>
            <div className="flex gap-4">
              <img src={assets.instagram_icon} className="w-6 cursor-pointer dark:brightness-200" alt="Instagram" />
              <img src={assets.facebook_icon} className="w-6 cursor-pointer dark:brightness-200" alt="Facebook" />
              <img src={assets.twitter_icon} className="w-6 cursor-pointer dark:brightness-200" alt="Twitter" />
              <img src={assets.linkedin_icon} className="w-6 cursor-pointer dark:brightness-200" alt="LinkedIn" />
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-playfair text-xl font-bold mb-6 dark:text-white">Company</h4>
            <ul className="flex flex-col gap-4 text-gray-500 dark:text-gray-400">
              <li className="hover:text-primary dark:hover:text-blue-400 cursor-pointer">About Us</li>
              <li className="hover:text-primary dark:hover:text-blue-400 cursor-pointer">Careers</li>
              <li className="hover:text-primary dark:hover:text-blue-400 cursor-pointer">Blog</li>
              <li className="hover:text-primary dark:hover:text-blue-400 cursor-pointer">Partners</li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-playfair text-xl font-bold mb-6 dark:text-white">Support</h4>
            <ul className="flex flex-col gap-4 text-gray-500 dark:text-gray-400">
              <li className="hover:text-primary dark:hover:text-blue-400 cursor-pointer">Help Center</li>
              <li className="hover:text-primary dark:hover:text-blue-400 cursor-pointer">Safety Information</li>
              <li className="hover:text-primary dark:hover:text-blue-400 cursor-pointer">Cancellation Options</li>
              <li className="hover:text-primary dark:hover:text-blue-400 cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Column 4: Newsletter Input */}
          <div>
            <h4 className="font-playfair text-xl font-bold mb-6 dark:text-white">Stay Updated</h4>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Subscribe to get the latest news.</p>
            <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
              <input 
                type="email" 
                placeholder="Email address" 
                className="px-4 py-2 w-full outline-none text-sm bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              <button className="bg-primary p-3 hover:opacity-90">
                <img src={assets.add_icon} className="w-4 invert" alt="Subscribe" />
              </button>
            </div>
          </div>
        </div>

        <hr className="my-12 border-gray-200 dark:border-gray-800" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
          <p>© 2026 QuickStay. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:underline cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">Privacy Policy</span>
            <span className="hover:underline cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">Terms of Service</span>
            <span className="hover:underline cursor-pointer hover:text-gray-700 dark:hover:text-gray-300">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;