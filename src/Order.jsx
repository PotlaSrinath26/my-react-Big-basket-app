import React from 'react';
import { useSelector } from 'react-redux';
import './Order.css'; // Make sure this path is correct

function Order() {
  const orders = useSelector(state => state.orders);

  const ordersList = orders.map((order, index) => {
    const calculatedTotal = order.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    return (
      <li key={index} className="order-card">
        <div className="order-card-inner">
          <div className="order-card-body">
            <h5 className="order-id">Order ID: #{order.id}</h5>
            <p className="order-date">
              <strong>Date:</strong> {order.date}
            </p>
            <p className="order-total">
              <strong>Total:</strong> ₹{calculatedTotal}
            </p>
            <ul className="order-item-list">
              {order.items.map((item, i) => (
                <li key={i} className="order-item">
                  <span className="item-name">{item.name}</span>
                  <span className="item-price">
                    ₹{item.price} × {item.quantity}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className="order-container">
      <h1 className="order-title">Your Orders</h1>
      {orders.length === 0 ? (
        <p className="no-orders-msg">You have no orders yet.</p>
      ) : (
        <ul className="order-list-wrapper">
          {ordersList}
        </ul>
      )}
    </div>
  );
}

export default Order;
