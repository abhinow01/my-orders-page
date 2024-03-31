import React from 'react';

const OrderModal = ({order,onClose}) => {
    if(!order)
    return null;

  return (
    <div className='fixed z-10  border '>
        <div className='flex item-center justify-center min-h-screen '>
        <div className=' bg-white rounded-lg shadow-lg p-6 '>
        <h2 className="text-xl font-bold">Order Details</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className='grid grid-cols-2 gap-4 '>
            <div>
                <p className='text-gray-600'>ORDER ID:</p>
                <p className='font-bold'>{order.orderID}</p>
            </div>
            <div>
              <p className="text-gray-600">Order Date:</p>
              <p className="font-bold">{order.orderDate}</p>
            </div>
            <div>
              <p className="text-gray-600">Delivery Date:</p>
              <p className="font-bold">{order.deliveryDate}</p>
            </div>
            <div>
              <p className="text-gray-600">Pickup Date:</p>
              <p className="font-bold">{order.pickupDate}</p>
            </div>
            <div>
              <p className="text-gray-600">Total Amount:</p>
              <p className="font-bold">{order.totalOrderAmount}</p>
            </div>
            <div>
              <p className="text-gray-600">Order Status:</p>
              <p className="font-bold">{order.orderStatus}</p>
            </div>
            </div>
            <div className='mt-6'>
            <h3 className='text-lg font-bold mb-2 '>Order items</h3>
            {order.items.map((item)=>(
                <div key={item.productName} className='flex item-center mb-2 '>
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
        </div>
        </div>

    </div>
  )
}

export default OrderModal