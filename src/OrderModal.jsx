import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import OrderStepper from './OrderStepper';

const orderStages = [
  'Order Confirmed',
  'Quality Checked',
  'Order Packed',
  'Pickup Scheduled',
  'Pickup Due',
  'Order Delivered',
  'Order Received',
  'KYC Received',
];

const OrderModal = ({ order, onClose }) => {
  if (!order) return null;
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleRaiseTicket = () => {
    navigate(`/raise-ticket?orderId=${order.orderId}`);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-end md:items-center z-50">
      <div
        ref={modalRef}
        className="bg-white rounded-t-lg md:rounded-lg shadow-lg p-6 w-full md:w-auto h-4/5 md:h-auto overflow-y-auto md:max-h-full"
      >
        <div className="flex flex-row justify-between align-middle">
          <h2 className="text-xl font-bold p-2 mb-2">Order Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <OrderStepper currentStage={order.orderStatus} stages={orderStages} />
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className=" font-bold">ORDER ID:</p>
            <p className="text-gray-600">{order.orderId}</p>
          </div>
          <div>
            <p className="font-bold">Order Date:</p>
            <p className="text-gray-600">{order.orderDate}</p>
          </div>
          <div>
            <p className="font-bold">Delivery Date:</p>
            <p className="text-gray-600 ">{order.deliveryDate}</p>
          </div>
          <div>
            <p className="font-bold">Pickup Date:</p>
            <p className="text-gray-600 ">{order.pickupDate}</p>
          </div>
          <div>
            <p className="font-bold">Total Amount:</p>
            <p className="text-gray-600 ">{order.totalOrderAmount}</p>
          </div>
          <div>
            <p className="font-bold">Order Status:</p>
            <p className="text-gray-600">{order.orderStatus}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2 ">Order items</h3>
          {order.items.map((item) => (
            <div key={item.productName} className="flex item-center mb-2 ">
              <img src={item.imageUrl} alt={item.productName} className="w-10 h-10 mr-2" />
              <div>
                <p className="font-bold">{item.productName}</p>
                <p>Size: {item.size}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Rent: {item.rent}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleRaiseTicket}
          >
            Raise Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;