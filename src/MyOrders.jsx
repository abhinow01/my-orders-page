import React, { useState, useEffect } from 'react';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

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

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">My Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map(order => (
          <div key={order.orderId} className="border border-gray-200 rounded-md p-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Order ID: {order.orderId}</span>
              <span className="text-gray-500">Order Date: {order.orderDate}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Delivery Date: {order.deliveryDate}</span>
              <span className="text-gray-500">Pickup Date: {order.pickupDate}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-500">Total Amount: {order.totalOrderAmount}</span>
              <span className="text-gray-500">Stage: {order.stage}</span>
            </div>
            {/* Additional details */}
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Items:</h2>
              {order.items.map(item => (
                <div key={item.productName} className="flex items-center mb-2">
                  <img src={item.imageUrl} alt={item.productName} className="w-12 h-12 mr-2 rounded-md" />
                  <div>
                    <p className="text-gray-800">{item.productName}</p>
                    <p className="text-gray-500">Size: {item.size}</p>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                    <p className="text-gray-500">Rent: {item.rent}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Button to raise ticket */}
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">Raise Ticket</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
