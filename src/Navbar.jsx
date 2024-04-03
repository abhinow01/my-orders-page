import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { IoIosOptions } from "react-icons/io";
import { AiOutlineSearch } from 'react-icons/ai';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogoClick = () => {
    navigate('/');
  }

  return (
    <div className='p-4 flex flex-row bg-white border border-gray-200 h-24 items-center justify-between sticky'>
      <div onClick={handleLogoClick} >
        <img alt="logo" src="https://dd7tel2830j4w.cloudfront.net/f1602334871226x948889548138196900/SharePal%20Logo2%20%281%29.svg" style={{ maxWidth: window.innerWidth <= 768 ? '75%' : '100%' }} />
      </div>
      <div className='hidden md:block'>location</div>
      <div className="relative flex items-center">
        <form className=''>
        <input type="search" placeholder='Type Here' className='w-full p-4 rounded-full bg-slate-100 hidden md:block' />
        <button className='absolute right-0 top-0 bottom-0 m-auto p-4 bg-blue-900 rounded-full text-white flex items-center'>
          <AiOutlineSearch />
        </button>
        </form>
      </div>
      <div className="hidden md:block">
        <button className='flex items-center p-4 bg-blue-900 text-white border rounded-xl'>
          <FaShoppingCart className='mr-2' /> My Cart
        </button>
      </div>
      <div className="md:hidden">
        <button className='p-2 bg-blue-900 text-white rounded-full'>
          <FaShoppingCart />
        </button>
      </div>
      <div>
        <button onClick={toggleSidebar}>
          <IoIosOptions style={{ height: "40px", width: "40px" }} />
        </button>
      </div>
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}

export default Navbar;
