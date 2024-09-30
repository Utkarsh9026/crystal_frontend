import React, { useState } from "react";
import Logo from "./logo.component";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa"; // FaBars for hamburger menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="h-20 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 bg-gradient-to-r from-[#01F0FF] via-[#FA7FFD] to-[#01F0FF]">
      {/* Left Side: Logo */}
      <Logo />

      {/* Middle: Navigation Links */}
      <div className="hidden md:flex space-x-4 sm:space-x-6 md:space-x-8 pl-4 sm:pl-6 md:pl-9">
        <a href="/" className="text-white hover:underline">
          Home
        </a>
        <a href="/shop" className="text-white hover:underline">
          Shop
        </a>
        <a href="/about" className="text-white hover:underline">
          About Us
        </a>
        <a href="/help" className="text-white hover:underline">
          Help
        </a>
      </div>

      {/* Right Side: Icons */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {/* User Icon */}
        <FaUser className="text-white text-lg sm:text-xl" />
        {/* Cart Icon with count */}
        <div className="relative">
          <FaShoppingCart className="text-white text-lg sm:text-xl" />
          <span className="absolute top-0 right-0 bg-pink-500 text-white text-xs sm:text-xs rounded-full px-1">
            0
          </span>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute z-50 top-16 left-0 w-full bg-gradient-to-r from-blue-200 via-pink-300 to-blue-400 flex flex-col items-center space-y-4 py-4 md:hidden">
          <a href="/" className="text-white hover:underline">
            Home
          </a>
          <a href="/shop" className="text-white hover:underline">
            Shop
          </a>
          <a href="/about" className="text-white hover:underline">
            About Us
          </a>
          <a href="/help" className="text-white hover:underline">
            Help
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
