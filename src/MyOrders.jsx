import React, { useState, useEffect } from 'react';
import OrderModal from './OrderModal';
import {mockOrders} from './mockOrders';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [currentOrderType,setCurrentOrderType] = useState('current');
  const [selectedOrder,setSlectedOrder] = useState(null);

  useEffect(() => {
    // Mock order data
    
    // Set orders state
    setOrders(mockOrders);
  }, []);


  const toggleOrderType = () => {
    setCurrentOrderType((prevType) => (prevType === 'past' ? 'current': 'past'));
  }

  const filteredOrders = currentOrderType === 'current'
  ? orders.filter((order) => order.currentStage === 'Current')
  : orders.filter((order) => order.currentStage === 'Past');

  const handleOrderClick = (order) => {
    setSlectedOrder(order);
  } 

  const handleCloseModal = () => {
    setSlectedOrder(null);
  };

  return (
    <div className="flex flex-col mt-4 justify-center items-center">
    <div className="flex flex-col w-full">
      <div className='flex items-center justify-center'>
        <h1 className="text-3xl p-4">My Orders</h1>
      </div>
    </div>
    <div className="border flex flex-col justify-between items-center align-middle h-auto p-4 border-gray-200 w-10/12 sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-4/5">
      <div className="flex justify-between items-center w-full">
        <h4 className="text-2xl">{currentOrderType === 'past' ? 'Past Orders' : 'Current Orders'}</h4>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-md m-4" onClick={toggleOrderType}>
          {currentOrderType === 'past' ? 'View Current Orders' : 'View Past Orders'}
        </button>
      </div>
      {/* Display filtered orders */}
      <div className="w-full p-4 overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Order ID</th>
              {window.innerWidth>768 && (
              <>
              <th className="px-4 py-2">Order Date</th>
              <th className="px-4 py-2">Delivery Date</th>
              <th className="px-4 py-2">Pickup Date</th>
              <th className="px-4 py-2">Total Amount</th>
              <th className="px-4 py-2">Order Status</th>
              </>
              )}
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.orderId}
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => handleOrderClick(order)}
              >
                <td className="border px-4 py-2">{order.orderId}</td>
                {window.innerWidth > 768 && (
                <>
                <td className="border px-4 py-2">{order.orderDate}</td>
                <td className="border px-4 py-2">{order.deliveryDate}</td>
                <td className="border px-4 py-2">{order.pickupDate}</td>
                <td className="border px-4 py-2">{order.totalOrderAmount}</td>
                <td className="border px-4 py-2">{order.orderStatus}</td>
                </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    {selectedOrder && <OrderModal order={selectedOrder} onClose={handleCloseModal} />}
  </div>
  );
};

export default MyOrders;
