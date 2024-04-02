import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyOrders from './MyOrders';
import RaiseTicket from './RaiseTicket';

const App = () => {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path="/my-orders" element={<MyOrders />} />
                <Route path='raise-ticket' element={<RaiseTicket/>} />
            </Routes>
        </Router>
  )
}

export default App