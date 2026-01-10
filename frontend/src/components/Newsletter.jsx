import React from 'react'
import { assets } from '../assets/assets'

const Newsletter = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Subscribe to our newsletter</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Get the latest travel updates, exclusive deals, and inspiration sent straight to your inbox.</p>
        
        <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto bg-white/10 p-2 rounded-2xl border border-white/20">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="bg-transparent flex-1 px-4 py-3 outline-none text-white placeholder:text-gray-500"
          />
          <button className="bg-primary hover:bg-opacity-90 transition-all text-white px-8 py-3 rounded-xl flex items-center justify-center gap-2 group">
            Subscribe
            <img src={assets.arrow_icon} className="h-4 invert group-hover:translate-x-1 transition-transform" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Newsletter