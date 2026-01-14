import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-[#f8f9fa] py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col gap-6">
            <img 
              src={assets.logo} 
              className="h-10 w-fit invert opacity-80" 
              alt="QuickStay Logo" 
            />
            <p className="text-gray-500 leading-relaxed">
              Your ultimate companion for finding the perfect stay. Experience luxury and comfort at your fingertips.
            </p>
            <div className="flex gap-4">
              <img src={assets.instagram_icon} className="w-6 cursor-pointer" alt="Instagram" />
              <img src={assets.facebook_icon} className="w-6 cursor-pointer" alt="Facebook" />
              <img src={assets.twitter_icon} className="w-6 cursor-pointer" alt="Twitter" />
              <img src={assets.linkedin_icon} className="w-6 cursor-pointer" alt="LinkedIn" />
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-playfair text-xl font-bold mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-gray-500">
              <li className="hover:text-primary cursor-pointer">About Us</li>
              <li className="hover:text-primary cursor-pointer">Careers</li>
              <li className="hover:text-primary cursor-pointer">Blog</li>
              <li className="hover:text-primary cursor-pointer">Partners</li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="font-playfair text-xl font-bold mb-6">Support</h4>
            <ul className="flex flex-col gap-4 text-gray-500">
              <li className="hover:text-primary cursor-pointer">Help Center</li>
              <li className="hover:text-primary cursor-pointer">Safety Information</li>
              <li className="hover:text-primary cursor-pointer">Cancellation Options</li>
              <li className="hover:text-primary cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Column 4: Newsletter Input */}
          <div>
            <h4 className="font-playfair text-xl font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-500 mb-4">Subscribe to get the latest news.</p>
            <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden">
              <input 
                type="email" 
                placeholder="Email address" 
                className="px-4 py-2 w-full outline-none text-sm"
              />
              <button className="bg-primary p-3">
                <img src={assets.add_icon} className="w-4 invert" alt="Subscribe" />
              </button>
            </div>
          </div>
        </div>

        <hr className="my-12 border-gray-200" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 QuickStay. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;