import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import {FaBars, FaTimes, FaHome, FaUser, FaMedkit, FaCertificate, FaPhone, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/physio_logo.jpg'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <header>
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img className="h-12 w-auto" src={logo} alt="Logo" />
            <p className='text-white ml-2 text-xs md:text-sm lg:text-l'>PUNE INSTITUTE OF PHYSICAL MEDICINE</p>
          </div>
          {/* Hamburger icon */}
          <div className="absolute inset-y-0 right-0 flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-expanded={isOpen}
            >
              {isOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
          {/* Navbar links */}
          <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
            <div className="flex flex-col md:flex-row space-y-1 md:space-y-0 md:space-x-4">
              <Link
                to="/"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <FaHome className="inline-block mr-1" />
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <FaUser className="inline-block mr-1" />
                About Us
              </Link>
              <Link
                to="/treatments"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <FaMedkit className="inline-block mr-1" />
                Treatments
              </Link>
              <Link
                to="/certifications"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <FaCertificate className="inline-block mr-1" />
                Certifications
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                <FaPhone className="inline-block mr-1" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    {/* Additional row for contact information */}
    <div className="bg-gray-900 py-2">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-gray-300">
          <div>
            <FaPhone className="inline-block mr-1" />
            +123 456 7890
          </div>
          <div>
            <FaEnvelope className="inline-block mr-1" />
            example@gmail.com
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header
