import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosOptions } from "react-icons/io";
import Sidebar from './Sidebar';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className='p-4 flex flex-row bg-white border border-gray-200 h-24 items-center justify-between'>
      <div><img alt="logo" src="https://dd7tel2830j4w.cloudfront.net/f1602334871226x948889548138196900/SharePal%20Logo2%20%281%29.svg"/></div>
      <div>location</div>
      <div className=' inset-0 border border-gray-200 rounded-xl p-2 flex justify-center items-center '>
        <CiSearch />
        <input type='text' placeholder='Search for products' className='p-2 w-full border-none bg-transparent ' />
      </div>
      <div>Abhinav</div>
      <div>
        <button className='flex flex-row justify-center items-baseline p-4 bg-blue-900 text-white border rounded-xl '>
          <FaShoppingCart className='mr-2' /> My Cart
        </button>
      </div>
      <div>
        <button onClick={toggleSidebar}>
          <IoIosOptions style={{height: "40px" , width: "40px" }} />
        </button>
      </div>
      {/* Show sidebar if open */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </div>
  );
}

export default Navbar;
