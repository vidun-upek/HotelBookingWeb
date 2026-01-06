import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/assets.js';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/experience' }, // Updated paths
        { name: 'About', path: '/about' },
    ];

    // Handle Scroll Effect
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    // Dynamic Class Helpers
    const navTextColor = isScrolled ? "text-gray-800" : "text-white";
    const navBgColor = isScrolled ? "bg-white/90 shadow-md backdrop-blur-lg py-3" : "bg-transparent py-5";

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 md:px-16 lg:px-24 transition-all duration-300 z-50 ${navBgColor}`}>
            
            {/* Logo */}
            <Link to="/" className="z-[60]">
                <img 
                    src={assets.logo} 
                    alt="Logo" 
                    className={`h-8 transition-all ${isScrolled ? "brightness-0" : ""}`} 
                />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link, i) => (
                    <NavLink 
                        key={i} 
                        to={link.path} 
                        className={({ isActive }) => `
                            group flex flex-col gap-0.5 font-medium transition-colors
                            ${isActive ? 'opacity-100' : 'opacity-80 hover:opacity-100'}
                            ${navTextColor}
                        `}
                    >
                        {link.name}
                        <div className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${isScrolled ? "bg-indigo-600" : "bg-white"}`} />
                    </NavLink>
                ))}
            </div>

            {/* Desktop Right Side */}
            <div className="hidden md:flex items-center gap-6">
                <img 
                    src={assets.searchIcon} 
                    alt="search" 
                    className={`h-5 cursor-pointer transition-all ${isScrolled ? "brightness-0" : "invert"}`} 
                />
                <button className={`border-2 px-5 py-1.5 text-sm font-medium rounded-full transition-all hover:bg-white hover:text-indigo-600 ${isScrolled ? 'border-indigo-600 text-indigo-600' : 'border-white text-white'}`}>
                    Dashboard
                </button>
            </div>

            {/* Mobile Actions (Search & Menu Toggle) */}
            <div className="flex items-center gap-4 md:hidden z-[60]">
                <img 
                    src={assets.searchIcon} 
                    alt="search" 
                    className={`h-6 ${isScrolled || isMenuOpen ? 'brightness-0' : 'invert'}`} 
                />
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
                    <img 
                        src={isMenuOpen ? assets.closeIcon : assets.menuIcon} // Ensure you have a menuIcon in assets
                        alt="Menu Toggle" 
                        className={`h-7 transition-all ${isScrolled || isMenuOpen ? 'brightness-0' : 'invert'}`} 
                    />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 text-xl font-semibold text-gray-800 transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                {navLinks.map((link, i) => (
                    <Link 
                        key={i} 
                        to={link.path} 
                        onClick={() => setIsMenuOpen(false)}
                        className="hover:text-indigo-600 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                
                <div className="flex flex-col items-center gap-4 w-full px-12">
                    <button className="w-full border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-full">
                        Dashboard
                    </button>
                    <button className="w-full bg-indigo-600 text-white px-8 py-3 rounded-full shadow-lg">
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;