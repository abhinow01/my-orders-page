import React, { useState, useEffect } from 'react';
import OrderModal from './OrderModal';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [currentOrderType,setCurrentOrderType] = useState('current');
  const [selectedOrder,setSlectedOrder] = useState(null);


  useEffect(() => {
    // Mock order data
    const mockOrders = [

              {
                "orderId": "BANTR1701441990199R",
                "orderDate": "Wednesday, December 05, 2023",
                "deliveryDate": "Tuesday, December 05, 2023 (After 12 Noon)",
                "pickupDate": "Wednesday, December 20, 2023 (Before 12 Noon)",
                "totalOrderAmount": "₹4278",
                "orderStatus": "Order Delivered",
                "currentStage": "Current",
                "items": [
                  {
                    "productName": "TREK 100 Trekking Shoes - Women's",
                    "size": "EU40 - UK6.5",
                    "quantity": 1,
                    "rent": "₹1539",
                    "imageUrl": "url_to_image"
                  },
                  {
                    "productName": "TREK 100 Trekking Shoes - Women's",
                    "size": "EU38 - UK5",
                    "quantity": 1,
                    "rent": "₹1539",
                    "imageUrl": "url_to_image"
                  }
                ]
              },
              {
                "orderId": "ORDER123456",
                "orderDate": "Monday, January 10, 2024",
                "deliveryDate": "Wednesday, January 12, 2024 (After 2 PM)",
                "pickupDate": "Saturday, January 22, 2024 (Before 10 AM)",
                "totalOrderAmount": "₹3200",
                "orderStatus": "Order Confirmed",
                "currentStage": "Past",
                "items": [
                  {
                    "productName": "Backpack",
                    "size": "Medium",
                    "quantity": 1,
                    "rent": "₹1200",
                    "imageUrl": "url_to_image"
                  },
                  {
                    "productName": "Camping Tent",
                    "size": "4-Person",
                    "quantity": 1,
                    "rent": "₹2000",
                    "imageUrl": "url_to_image"
                  }
                ]
              },
              {
                "orderId": "ORDER789012",
                "orderDate": "Saturday, February 15, 2023",
                "deliveryDate": "Tuesday, February 20, 2023 (Before 12 Noon)",
                "pickupDate": "Friday, March 03, 2023 (After 10 AM)",
                "totalOrderAmount": "₹2500",
                "orderStatus": "Order Delivered",
                "currentStage": "Past",
                "items": [
                  {
                    "productName": "Hiking Boots",
                    "size": "US 10",
                    "quantity": 1,
                    "rent": "₹1500",
                    "imageUrl": "url_to_image"
                  },
                  {
                    "productName": "Camping Chair",
                    "size": "One Size",
                    "quantity": 1,
                    "rent": "₹1000",
                    "imageUrl": "url_to_image"
                  }
                ]
              },
              {
                "orderId": "ORDER345678",
                "orderDate": "Friday, March 01, 2023",
                "deliveryDate": "Sunday, March 05, 2023 (After 3 PM)",
                "pickupDate": "Friday, March 15, 2023 (Before 11 AM)",
                "totalOrderAmount": "₹1800",
                "orderStatus": "Order Packed",
                "currentStage": "Past",
                "items": [
                  {
                    "productName": "Sleeping Bag",
                    "size": "Regular",
                    "quantity": 1,
                    "rent": "₹800",
                    "imageUrl": "url_to_image"
                  },
                  {
                    "productName": "Camping Stove",
                    "size": "One Size",
                    "quantity": 1,
                    "rent": "₹1000",
                    "imageUrl": "url_to_image"
                  }
                ]
              },
              {
                "orderId": "ORDER901234",
                "orderDate": "Wednesday, April 05, 2023",
                "deliveryDate": "Saturday, April 08, 2023 (After 1 PM)",
                "pickupDate": "Monday, April 17, 2023 (Before 10 AM)",
                "totalOrderAmount": "₹2900",
                "orderStatus": "Order Received",
                "currentStage": "Past",
                "items": [
                  {
                    "productName": "Tent",
                    "size": "4-Person",
                    "quantity": 1,
                    "rent": "₹1600",
                    "imageUrl": "url_to_image"
                  },
                  {
                    "productName": "Sleeping Pad",
                    "size": "One Size",
                    "quantity": 1,
                    "rent": "₹1300",
                    "imageUrl": "url_to_image"
                  }
                ]
              
            
          }
          
    ];

    // Set orders state
    setOrders(mockOrders);
  }, []);

  const toggleOrderType = ()=>{
    setCurrentOrderType((prevType) => (prevType === 'past' ? 'current': 'past'));
    // setCurrentOrderType(null);
  }

  const filteredOrders = currentOrderType === 'current'
  ? orders.filter((order) => order.currentStage === 'Current')
  : orders.filter((order) => order.currentStage === 'Past');

  const handleOrderClick = (order)=>{
    setSlectedOrder(order);
  } 

  const handleCloseModal = () =>{
    setSlectedOrder(null);
  };


  return (
<div className="flex flex-col mt-4 justify-center items-center">
      <div className="flex flex-col w-full">
        <div>
          <h1 className="text-3xl p-4 ">My Orders</h1>
        </div>
        {/* <div className=' m-2 flex justify-center items-center  border w-3/4  border-zinc-400 '></div> */}
      </div>
      <div className=" border flex flex-col justify-between items-center align-middle h-auto p-4 border-gray-200 w-4/5 ">
        <div className="flex justify-between items-center w-full">
          <h4 className="text-2xl">{currentOrderType === 'past' ? 'Past Orders' : 'Current Orders'}</h4>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md m-4" onClick={toggleOrderType}>
            {currentOrderType === 'past' ? 'View Current Orders' : 'View Past Orders'}
          </button>
        </div>
        {/* Display filtered orders */}
        <div className="w-full p-4 ">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Order Date</th>
                <th className="px-4 py-2">Delivery Date</th>
                <th className="px-4 py-2">Pickup Date</th>
                <th className="px-4 py-2">Total Amount</th>
                <th className="px-4 py-2">Order Status</th>
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
                  <td className="border px-4 py-2">{order.orderDate}</td>
                  <td className="border px-4 py-2">{order.deliveryDate}</td>
                  <td className="border px-4 py-2">{order.pickupDate}</td>
                  <td className="border px-4 py-2">{order.totalOrderAmount}</td>
                  <td className="border px-4 py-2">{order.orderStatus}</td>
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
