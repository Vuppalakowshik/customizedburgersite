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
            <li key={order._id}>
              {order.burgerName} - {order.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


