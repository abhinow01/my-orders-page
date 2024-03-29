import React, { useState, useEffect } from 'react';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [currentOrderType,setCurrentOrderType] = useState('current');



  useEffect(() => {
    // Mock order data
    const mockOrders = [
      {
        orderId: 'BANTR1701441990199R',
        orderDate: 'Wednesday, December 05, 2023',
        deliveryDate: 'Tuesday, December 05, 2023 (After 12 Noon)',
        pickupDate: 'Wednesday, December 20, 2023 (Before 12 Noon)',
        totalOrderAmount: '₹4278',
        stage: 'Order Delivered',
        items: [
          {
            productName: 'TREK 100 Trekking Shoes - Women\'s',
            size: 'EU40 - UK6.5',
            quantity: 1,
            rent: '₹1539',
            imageUrl: 'url_to_image'
          },
          {
            productName: 'TREK 100 Trekking Shoes - Women\'s',
            size: 'EU38 - UK5',
            quantity: 1,
            rent: '₹1539',
            imageUrl: 'url_to_image'
          }
        ]
      }
      // Add more orders as needed
    ];

    // Set orders state
    setOrders(mockOrders);
  }, []);

  const toggleOrderType = ()=>{
    setCurrentOrderType(currentOrderType === 'past' ? 'current': 'past');
  }

  return (
    <div className='flex flex-col mt-4 justify-center items-center '>
     <div className='flex justify-center'>
        <h1 className='text-3xl'> My orders </h1>
     </div>
     <div className='border flex justify-between  align-middle items-center h-auto p-4 border-gray-200 '>
       <h1 className='text-3xl'>{currentOrderType === 'past'? 'Past Orders': 'Current Order'} Details</h1>
      <button className=' bg-blue-500 text-white px-4 py-2 rounded-md m-4 ' onClick={toggleOrderType}>
   {currentOrderType === 'past' ? 'Show Current Orders' : 'Show Past Orders'}
      </button>
     </div>
    </div>
  );
};

export default MyOrders;
