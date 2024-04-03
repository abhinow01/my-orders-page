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
                    "imageUrl": "https://contents.mediadecathlon.com/p1144537/dfa2801f7269e1b78e6c2f502fe513c7/p1144537.jpg?format=auto&quality=70&f=1024x0"
                  },
                  {
                    "productName": "TREK 100 Trekking Shoes - Women's",
                    "size": "EU38 - UK5",
                    "quantity": 1,
                    "rent": "₹1539",
                    "imageUrl": "https://contents.mediadecathlon.com/p1144537/dfa2801f7269e1b78e6c2f502fe513c7/p1144537.jpg?format=auto&quality=70&f=1024x0"
                  }
                ]
              },
              {
                "orderId": "XYZ1234567890123A",
                "orderDate": "Thursday, December 06, 2023",
                "deliveryDate": "Friday, December 08, 2023 (After 10 AM)",
                "pickupDate": "Tuesday, December 19, 2023 (Before 11 AM)",
                "totalOrderAmount": "₹3850",
                "orderStatus": 'Order Confirmed',
                "currentStage": "Current",
                "items": [
                  {
                    "productName": "Running Shoes - Men's",
                    "size": "EU42 - UK8",
                    "quantity": 1,
                    "rent": "₹1850",
                    "imageUrl": "url_to_image"
                  },
                  {
                    "productName": "Yoga Mat - Premium Quality",
                    "quantity": 1,
                    "rent": "₹2000",
                    "imageUrl": "url_to_image"
                  }
                ]
              },
              {
                "orderId": "LMNOP0987654321B",
                "orderDate": "Tuesday, December 12, 2023",
                "deliveryDate": "Thursday, December 14, 2023 (After 3 PM)",
                "pickupDate": "Wednesday, December 27, 2023 (Before 12 Noon)",
                "totalOrderAmount": "₹3125",
                "orderStatus": "Quality Checked",
                "currentStage": "Current",
                "items": [
                  {
                    "productName": "Backpack - 30L Capacity",
                    "color": "Blue",
                    "quantity": 1,
                    "rent": "₹725",
                    "imageUrl": "url_to_image"
                  },
                  {
                    "productName": "Camping Tent - 4 Person",
                    "quantity": 1,
                    "rent": "₹2400",
                    "imageUrl": "url_to_image"
                  }
                ]
              },
              {
                "orderId": "ABCDEF5678901234C",
                "orderDate": "Monday, December 18, 2023",
                "deliveryDate": "Wednesday, December 20, 2023 (After 1 PM)",
                "pickupDate": "Monday, January 01, 2024 (Before 10 AM)",
                "totalOrderAmount": "₹4850",
                "orderStatus": "Order Packed",
                "currentStage": "Current",
                "items": [
                  {
                    "productName": "Portable Gas Stove - Camping",
                    "quantity": 1,
                    "rent": "₹1300",
                    "imageUrl": "url_to_image"
                  },
                  {
                    "productName": "Sleeping Bag - Arctic Grade",
                    "quantity": 2,
                    "rent": "₹3550",
                    "imageUrl": "url_to_image"
                  }
                ]
              },
              {
                "orderId": "PQRSTU9876543210D",
                "orderDate": "Friday, December 22, 2023",
                "deliveryDate": "Monday, December 25, 2023 (After 2 PM)",
                "pickupDate": "Friday, January 05, 2024 (Before 3 PM)",
                "totalOrderAmount": "₹5500",
                "orderStatus": "Order Received",
                "currentStage": "Current",
                "items": [
                  {
                    "productName": "DSLR Camera - Professional",
                    "quantity": 1,
                    "rent": "₹3500",
                    "imageUrl": "url_to_image"
                  },
                  {
                    "productName": "Tripod Stand - Adjustable",
                    "quantity": 1,
                    "rent": "₹2000",
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
                "orderStatus": 'KYC Received',
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
                "orderStatus": 'KYC Received',
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
                "orderStatus": 'KYC Received',
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
                "orderStatus": 'KYC Received',
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
