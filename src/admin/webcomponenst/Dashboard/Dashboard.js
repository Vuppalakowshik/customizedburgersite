import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

export const Dashboard = ({ token }) => {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await axios.get('http://localhost:5000/admin/users', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const ordersRes = await axios.get('http://localhost:5000/admin/orders', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUsers(usersRes.data);
        setOrders(ordersRes.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching admin data', err);
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) return <p className="loading-text">Loading...</p>;

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>🍔 Admin Dashboard</h2>
      </header>

      <div className="dashboard-section">
        <h3>New Users</h3>
        <ul>
          {users.map((user) => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      </div>

      <div className="dashboard-section">
  <h3>Orders</h3>
  <ul>
    {orders.map((order) => (
      <li key={order._id} style={{ marginBottom: "15px" }}>
        <strong>Order ID:</strong> {order._id}<br />
        <strong>Mobile:</strong> {order.mobile}<br />
        <strong>Total:</strong> ₹{order.totalAmount}<br />
        <strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}<br />
        <strong>Items:</strong>
        <ul>
          {order.cartItems.map((item, idx) => (
            <li key={idx}>
              {item.name} × {item.quantity} = ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
};


