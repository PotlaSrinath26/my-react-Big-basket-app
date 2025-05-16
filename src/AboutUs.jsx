import React from 'react';
import './AboutUs.css'; // Optional CSS for styling

function AboutUs() {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        Welcome to <strong>Village Mart</strong> — your one-stop shop for fresh vegetables, groceries,
        and more. We're committed to providing the highest quality products at fair prices, directly from farm to table.
      </p>

      <h2>Our Mission</h2>
      <p>
        To deliver fresh, local produce and daily essentials to your doorstep while supporting local farmers and sustainable practices.
      </p>

      <h2>Why Choose Us?</h2>
      <ul>
        <li>✅ Fresh, hand-picked vegetables every day</li>
        <li>✅ Quick and convenient ordering through our app</li>
        <li>✅ Transparent pricing with no hidden charges</li>
        <li>✅ Friendly and reliable customer support</li>
      </ul>

      <h2>Meet the Founder</h2>
      <p>
        <strong>Srinath</strong>, the founder of Village Mart, started this venture with a vision
        to bridge the gap between farmers and consumers. With a background in technology and a passion for
        clean, healthy food, he turned this idea into reality for the benefit of local communities.
      </p>

      <h2>Contact Us</h2>
      <p>Email: support@villagemart.com</p>
      <p>Phone: +91 70952 82489</p>
      <p>Location: 151 Pulipadu,Gurujala,Guntur,AP,India</p>

      <h2>Follow Us</h2>
      <p>
        <a href="https://www.instagram.com/srinath.potla" target="_blank" rel="noopener noreferrer">
          📷 Instagram
        </a>
        &nbsp;|&nbsp;
        <a href="https://www.facebook.com/Srinath Potla" target="_blank" rel="noopener noreferrer">
         🅕  Facebook
        </a>
      </p>
    </div>
  );
}

export default AboutUs;
