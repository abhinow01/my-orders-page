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
    <div ref={sidebarRef} className={`fixed border top-0 right-0 h-screen w-64 bg-white  text-gray-600 p-4 transition-transform duration-300 transform ${sidebarClass}`}>
      {/* Close button */}
      <button className="absolute top-2 right-2 text-gray-600 " onClick={onClose}>
        <FaTimes />
      </button>
      {/* Sidebar content */}
      <div className="flex flex-col h-full">
        {/* User dropdown */}
        <div className="mb-auto">
          <button className="text-left w-full py-2 px-4 flex items-center justify-between" onClick={toggleDropdown}>
            <div className="flex items-center">
              <FaUser className="mr-2"/> Abhinav
            </div>
            <FaCaretDown className="ml-auto" />
          </button>
          {/* Dropdown options */}
          {dropdownOpen && (
            <div className="pl-4 ">
              <button className="text-left w-full py-2 px-4 hover:bg-gray-100  rounded-lg ">My Account</button>
              <button className="text-left w-full py-2 px-4 hover:bg-gray-100  rounded-lg ">My Wallet</button>
              <Link to="/my-orders" className="text-left w-full py-2 px-4 flex items-center justify-between hover:bg-gray-100  rounded-lg ">
                <div className="flex items-center">
                  My orders 
                </div>
              </Link>
              <button className="text-left w-full py-2 px-4 hover:bg-gray-100  rounded-lg ">My Cart</button>
            </div>
          )}
        </div>
        {/* Other sidebar options */}
        <div className='flex flex-col flex-1'>
          <button className="text-left w-full py-2 px-4 hover:bg-gray-100  rounded-lg ">Rent/Buy</button>
          <button className="text-left w-full py-2 px-4 hover:bg-gray-100  rounded-lg ">Refurbished</button>
          <button className="text-left w-full py-2 px-4 hover:bg-gray-100  rounded-lg ">Policies</button>
          <button className="text-left w-full py-2 px-4 hover:bg-gray-100  rounded-lg ">FAQ</button>
          <button className="text-left w-full py-2 px-4 hover:bg-gray-100  rounded-lg ">Socials</button>
        </div>
        {/* Logout button */}
        <div>
          <button className="text-left w-full py-2 px-4 hover:bg-gray-100  rounded-lg">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
