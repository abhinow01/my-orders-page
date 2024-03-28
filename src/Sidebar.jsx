import React, { useState, useEffect, useRef } from 'react';
import { FaUser, FaCaretDown, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const sidebarClass = isOpen ? "translate-x-0" : "translate-x-full";

  return (
    <div ref={sidebarRef} className={`fixed top-0 right-0 h-screen w-64 bg-gray-800 text-white p-4 transition-transform duration-300 transform ${sidebarClass}`}>
      {/* Close button */}
      <button className="absolute top-2 right-2 text-white" onClick={onClose}>
        <FaTimes />
      </button>
      {/* User dropdown */}
      <div className="mb-4">
        <button className="text-left w-full py-2 px-4 flex items-center justify-between" onClick={toggleDropdown}>
          <div className="flex items-center">
            <FaUser className="mr-2"/> Abhinav
          </div>
          <FaCaretDown className="ml-auto" />
        </button>
        {/* Dropdown options */}
        {dropdownOpen && (
          <div className="pl-4">
            <button className="text-left w-full py-2 px-4 hover:bg-gray-700">My Account</button>
            <button className="text-left w-full py-2 px-4 hover:bg-gray-700">My Wallet</button>
            <Link to="/my-orders" className="text-left w-full py-2 px-4 flex items-center justify-between hover:bg-gray-700">
          <div className="flex items-center">
           My orders 
          </div>
        </Link>
            <button className="text-left w-full py-2 px-4 hover:bg-gray-700">My Cart</button>
          </div>
        )}
      </div>
      {/* Other sidebar options */}
      <div>
        <button className="text-left w-full py-2 px-4 hover:bg-gray-700">Rent/Buy</button>
        <button className="text-left w-full py-2 px-4 hover:bg-gray-700">Refurbished</button>
        <button className="text-left w-full py-2 px-4 hover:bg-gray-700">Policies</button>
        <button className="text-left w-full py-2 px-4 hover:bg-gray-700">FAQ</button>
        <button className="text-left w-full py-2 px-4 hover:bg-gray-700">Socials</button>
      </div>
      {/* Logout button */}
      <div className="mt-auto">
        <button className="text-left w-full py-2 px-4 bg-red-500 hover:bg-red-600">Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
