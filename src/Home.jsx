import React from 'react';
import './HomePage.css';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to <span>Village Mart</span> 🛒</h1>
        <p>Your one-stop shop for fresh vegetables, groceries & more — straight from local <b>farmers </b>to your doorstep!</p>
        <Link to="/shop" className="shop-button">Start Shopping</Link>
      </header>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature">
            <h3>🌿 Fresh Produce</h3>
            <p>Daily picked fruits & vegetables from local farms.</p>
          </div>
          <div className="feature">
            <h3>🚚 Fast Delivery</h3>
            <p>Get your order delivered the same day in most areas.</p>
          </div>
          <div className="feature">
            <h3>💳 Secure Payment</h3>
            <p>Pay safely using UPI, cards, or cash on delivery.</p>
          </div>
        </div>
      </section>

      <section className="about-call">
        <h2>Get to Know Us</h2>
        <p>We believe in empowering local farmers and delivering the best quality to your family.</p>
        <Link to="/about" className="about-link">Learn More About Us →</Link>
      </section>
    </div>
  );
}

export default HomePage;
