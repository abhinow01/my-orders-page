import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyOrders from './MyOrders';

const App = () => {
  return (
    <Router>
            <Navbar />
            <Routes>
                <Route path="/my-orders" element={<MyOrders />} />
            </Routes>
        </Router>
  )
}

export default App