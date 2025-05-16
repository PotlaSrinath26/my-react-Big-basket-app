import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrementItem,
  incrementItem,
  RemoveCart,
  clearCart,
  orderDetails,
} from './store';
import './Cart.css';
import emailjs from 'emailjs-com';
import QRCode from 'react-qr-code';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {
  const CartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const couponCodeRef = useRef();
  const emailRef = useRef();

  const [discountRate, setDiscountRate] = useState(0);
  const [couponCodeDiscount, setCouponCodeDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleCouponApply = () => {
    const code = couponCodeRef.current.value.trim().toUpperCase();
    switch (code) {
      case 'SRINATH10':
        setCouponCodeDiscount(10);
        break;
      case 'SRINATH20':
        setCouponCodeDiscount(20);
        break;
      case 'SRINATH30':
        setCouponCodeDiscount(30);
        break;
      default:
        alert('Invalid coupon code');
        setCouponCodeDiscount(0);
    }
  };

  const totalPrice = CartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = (totalPrice * discountRate) / 100;
  const couponAmount = (totalPrice * couponCodeDiscount) / 100;
  const taxAmount = ((totalPrice - discount - couponAmount) * 5) / 100;
  const finalPrice = totalPrice - discount - couponAmount + taxAmount + 20;

  const handleDiscountClick = (rate) => {
    setDiscountRate(rate);
  };

  const handlePlaceOrder = () => {
    const orderData = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      items: CartItems,
      total: finalPrice.toFixed(2),
    };

    const formattedItems = CartItems.map((item) =>
      `${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const itemDetailsString = CartItems.map(item =>
      ` Item: ${item.name}\n  Quantity: ${item.quantity}\n Price: ₹${(item.price * item.quantity).toFixed(2)}`
    ).join('\n\n');

    const totalQuantity = CartItems.reduce((sum, item) => sum + item.quantity, 0);

    const templateParams = {
      order_id: orderData.id,
      formatted_items_list: formattedItems,
      items_list: itemDetailsString,
      total_amount: finalPrice.toFixed(2),
      tax: taxAmount.toFixed(2),
      manual_discount: discount.toFixed(2),
      coupon_discount: couponAmount.toFixed(2),
      shipping: '20.00',
      total_quantity: totalQuantity,
      email: userEmail,
    };

    const SERVICE_ID = 'service_nlmnl7b';
    const TEMPLATE_ID = 'template_x5bagak';
    const PUBLIC_KEY = 'BYg92VBcp4HT2kuaL';

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => console.log('✅ Email sent successfully'))
      .catch((error) => console.error('❌ Email sending failed:', error));

    dispatch(orderDetails(orderData));
    dispatch(clearCart());
    alert('✅ Order placed successfully!');
  };

  return (
    <div className="cart-container">
      <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
      {CartItems.length === 0 ? (
        <h1>🛒 Your cart is empty</h1>
      ) : (
        <>
          <h2 style={{ color: 'darkgreen', fontFamily: 'cursive', textAlign: 'center' }}>
            <strong>Welcome To VillageMart</strong>
          </h2>
          <ol>
            {CartItems.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt={item.name} className="veg-image" />
                <div>
                  <strong>Item:</strong> {item.name}
                  <strong> Price:</strong> ₹{item.price}
                  <strong> Quantity:</strong> {item.quantity}
                </div>
                <div>
                  <button
                    onClick={() => dispatch(incrementItem(item))}
                    style={{ backgroundColor: '#28a745', color: 'white' }}
                  >
                    +
                  </button>
                  <button
                    onClick={() =>
                      item.quantity > 1
                        ? dispatch(decrementItem(item))
                        : dispatch(RemoveCart(item))
                    }
                    style={{ backgroundColor: '#fd7e14', color: 'white' }}
                  >
                    -
                  </button>
                  <button
                     onClick={() => {
                      dispatch(RemoveCart(item));
                      toast.error(`${item.name} removed from cart!`);
  }}
  style={{ backgroundColor: '#dc3545', color: 'white' }}
>
  Remove
</button>

                </div>
              </li>
            ))}
          </ol>

          <div className="cart-summary">
            <h3 style={{ textAlign: 'center', color: '#333' }}><strong>Cart Summary</strong></h3>
            <p style={{ textAlign: 'center' }}><strong>💸Total: ₹</strong>{totalPrice.toFixed(2)}</p>
            <p style={{ textAlign: 'center' }}>
              <strong>🏷️ Discount: ₹</strong>{discount.toFixed(2)} ({discountRate * 100}% off)
            </p>
            <p style={{ textAlign: 'center' }}>
              <strong>🔖 Coupon Discount: ₹</strong>{couponAmount.toFixed(2)} ({couponCodeDiscount}% off)
            </p>

            <div className="discount-buttons">
              <button
                onClick={() => handleDiscountClick(0.1)}
                style={{ backgroundColor: '#20c997', color: 'white' }}
              >
                Apply 10% Discount
              </button>
              <button
                onClick={() => handleDiscountClick(0.2)}
                style={{ backgroundColor: '#17a2b8', color: 'white' }}
              >
                Apply 20% Discount
              </button>
              <button
                onClick={() => handleDiscountClick(0.3)}
                style={{ backgroundColor: '#007bff', color: 'white' }}
              >
                Apply 30% Discount
              </button>
              <div style={{ marginTop: '15px' }}>
                <input type="text" placeholder="Enter coupon code..." ref={couponCodeRef} />
                <button
                  onClick={handleCouponApply}
                  style={{ backgroundColor: '#6610f2', color: 'white' }}
                >
                  Apply Coupon
                </button>
              </div>
            </div>

            <p style={{ textAlign: 'center' }}><strong>💼 Tax: ₹</strong>{taxAmount.toFixed(2)}</p>
            <p style={{ textAlign: 'center' }}><strong>📦 Shipping: ₹</strong>20.00</p>
            <h4 style={{ textAlign: 'center' }}>
              <strong>💰 Final Price: ₹</strong>{finalPrice.toFixed(2)}
            </h4>

            <h3 style={{ textAlign: 'center', marginTop: '20px' }}>Select Payment Method</h3>
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => setPaymentMethod('qr')}
                style={{ backgroundColor: '#6f42c1', color: 'white', margin: '5px' }}
                
              >
                QR Code
              </button>
              <button
                onClick={() => setPaymentMethod('card')}
                style={{ backgroundColor: '#6610f2', color: 'white', margin: '5px' }}
              >
                Card
              </button>
            </div>

            {paymentMethod === 'qr' && (
              <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h4>Scan UPI QR to Pay ₹{finalPrice.toFixed(2)}</h4>
                <QRCode
                  value={`upi://pay?pa=7095282489@ybl&pn=VILLAGE MART'S&am=${finalPrice.toFixed(
                    2
                  )}&cu=INR`}
                  size={200}
                />
              </div>
            )}

            {paymentMethod === 'card' && (
              <div style={{ marginTop: '20px' }}>
                <h4>Enter Card Details</h4>
                <div><label>Cardholder Name:</label><input type="text" placeholder="Name on Card" /></div>
                <div><label>Card Number:</label><input type="text" placeholder="1234 5678 9012 3456" /></div>
                <div><label>Expiry Date:</label><input type="text" placeholder="MM/YY" /></div>
                <div><label>CVV:</label><input type="password" placeholder="123" maxLength={4} /></div>
                <p>Total to be charged: ₹{finalPrice.toFixed(2)}</p>
              </div>
            )}

            <div className="email-box">
              <label>📧 Enter your Gmail for order confirmation:</label>
              <input
                type="email"
                ref={emailRef}
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
                 <button
                  onClick={handlePlaceOrder} 
                    
                  style={{
                  marginTop: '20px',
                  backgroundColor: '#14532d',
                  color: 'white',
                  padding: '10px',
                                   }}
>
                   ✅ Complete Purchase
                   </button>

          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
