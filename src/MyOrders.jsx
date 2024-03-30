import React, { useState, useEffect } from 'react';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [currentOrderType,setCurrentOrderType] = useState('current');



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
    setCurrentOrderType(currentOrderType === 'past' ? 'current': 'past');
  }

  const filteredOrders = currentOrderType === 'Current' ? orders.filter(order => order.currentStage === 'Current') : orders.filter(order => order.currentStage === 'Past');

  return (
    <div className='flex flex-col mt-4 justify-center items-center'>
    <div className='flex w-full'>
      <div>
        <h1 className='text-3xl'>My orders</h1>
      </div>
    </div>
    <div className='border flex flex-col justify-between items-center align-middle  h-auto p-4 border-gray-200'>
        <div className='flex justify-between items-center'>
      <h1 className='text-3xl'>{currentOrderType === 'past'? 'Past Orders': 'Current Orders'} </h1>
      <button className='bg-blue-500 text-white px-4 py-2 rounded-md m-4' onClick={toggleOrderType}>
            {currentOrderType === 'past' ? 'b' : 'b'}
          </button>
          </div>
      {/* Display filtered orders */}
      <div className='flex flex-col'>
      {filteredOrders.map(order => (
        <div key={order.orderId} className='flex flex-col justify-center items-center'>
          {order.items.map(item => (
            <div key={item.productName}>
              {item.productName}
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  </div>
  );
};

export default MyOrders;
