import React from 'react';
import './ContactUs.css'; // Optional styling

function ContactUs() {
  return (
    <div className="contact-us-container">
      <h1>📞 Contact Us</h1>
      <p>
        We're here to help! Whether you have questions about your order, need support, or just want to say hello,
        feel free to reach out to us.
      </p>

      <h2>📧 Email</h2>
      <p><b>NAME:</b>POTLA.SRINATH</p>
      <p>
        <a href="mailto:support@villagemart.com">support@villagemart.com</a>
      </p>

      <h2>📱 Phone</h2>
      <p>
        <a href="tel:+917095282489">+91 7095282489</a>
      </p>

      <h2>📍 Address</h2>
      <p>Location: 151 Pulipadu,Gurujala,Guntur,AP,India</p>

      <h2>🌐 Follow Us</h2>
      <p>
        <a href="https://www.instagram.com/srinath.potla" target="_blank" rel="noopener noreferrer">📸 Instagram</a><br />
        <a href="https://facebook.com/SrinathPotla" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
      </p>
    </div>
  );
}

export default ContactUs;
