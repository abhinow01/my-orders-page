import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RaiseTicket = () => {
  const location = useLocation();
  const orderId = new URLSearchParams(location.search).get('orderId');
  const [ticketDetails, setTicketDetails] = useState({
    subject: '',
    description: ''
  });

  const handleTicketDetailsChange = (e) => {
    setTicketDetails({ ...ticketDetails, [e.target.name]: e.target.value });
  };

  const handleSubmitTicket = (e) => {
    e.preventDefault();
    console.log('Ticket Details:', ticketDetails);
    console.log('Order ID:', orderId);
    setTicketDetails({ subject: '', description: '' });
    notify();
  };

  const notify = () => toast('Ticket submitted, feel free to raise another one !');

  return (
    <div className="container mx-auto mt-8">
      <ToastContainer />
      <h2 className="text-2xl font-bold mb-4">Raise Ticket</h2>
      <p className="mb-4">Order ID: {orderId}</p>
      <form onSubmit={handleSubmitTicket}>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-gray-700 font-bold mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={ticketDetails.subject}
            onChange={handleTicketDetailsChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={ticketDetails.description}
            onChange={handleTicketDetailsChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default RaiseTicket;
