import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';
import Milk from './Milkshake';
import Chocolates from './Chocolates';
import Order from './Order';
import Cart from './Cart';
import AboutUs from './AboutUs';
import Login from './Login';
import ContactUs from './ContactUs';


function App() {
  
  const cartItems = useSelector(state => state.cart);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
      <nav className="navbar">
        <h1 style={{
          textAlign: 'left',
          color: 'Yellow',
          fontSize: '30px',
          fontFamily: 'Georgia, serif',
          margin: '20px 0',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)'
        }}>
         Village Mart
        </h1>

        <Link to="/Home">&#127968; Home</Link>
        <Link to="/Veg">&#129001; Veg</Link>
        <Link to="/NonVeg">&#128997; Non-Veg</Link>
        <Link to="/Milkshake">&#129380; Milkshake</Link>
        <Link to="/Chocolates">&#127851; Chocolates</Link>
        <Link to="/Order">&#128230; Orders</Link>
        <Link to="/Cart">  &#128722;{cartCount > 0 && <span className="cart-badge">({cartCount})</span>} </Link>
        <Link to="/AboutUs">&#128100; About Us</Link>
        <Link to="/Login">&#128273; Login</Link>
        <Link to="/ContactUs">ContactUs</Link>
   

      </nav>

      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Veg' element={<Veg />} />
        <Route path='/NonVeg' element={<NonVeg />} />
        <Route path='/Milkshake' element={<Milk />} />
        <Route path='/Chocolates' element={<Chocolates />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/ContactUs' element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
