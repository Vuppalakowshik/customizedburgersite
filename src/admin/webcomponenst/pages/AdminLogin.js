import React, { useState } from 'react';
import axios from 'axios';
import Backimage from "../../images/00-Preview.avif";



export const AdminLogin = ({ setAuthToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/admin/login', { username, password });

      setAuthToken(res.data.token); // Store the token in parent component (App.js)
      setError('');
    } catch (err) {
      setError('Invalid login credentials');
    }
  };

  return (
    <>
    <div className="login-container">
    <img src={Backimage} alt="Background" className="background-image" />
    <div className="login-box">
    <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
        <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
     <button onClick={handleLogin}>Login</button>
     {error && <p>{error}</p>}
     
    </div>
  </div>
  </>
  
  );
};


