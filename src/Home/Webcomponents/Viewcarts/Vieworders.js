import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const mobile = localStorage.getItem("userMobile");

  useEffect(() => {
    const fetchOrders = async () => {
      if (!mobile) return;
      try {
        const res = await axios.get(`http://localhost:5000/api/orders/history/${mobile}`);
        if (res.data.success) {
          setOrders(res.data.orders);
        }
      } catch (err) {
        console.error("Failed to fetch orders", err);
      }
    };

    fetchOrders();
  }, [mobile]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Order History</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "8px" }}>
            <h4>Order ID: {order._id}</h4>
            <p>Date: {new Date(order.createdAt).toLocaleString()}</p>
            <p>Total: ₹{order.totalAmount}</p>
            <h5>Items:</h5>
            <ul>
              {order.cartItems.map((item, i) => (
                <li key={i}>
                  {item.name} × {item.quantity} = ₹{item.price * item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};
