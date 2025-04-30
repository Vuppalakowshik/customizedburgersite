import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Backimage from "../../../Assets/images/React App_files/backgroundimage.jpg";
import { useCart } from "../Cardcontext/Cardcontext.js";

export const Login = () => {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  const { clearCart, setCartItems, fetchCart } = useCart();  // 👈 use context fetchCart

  const handleLogin = async () => {
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Login failed.");
        return;
      }

      // ✅ Clear previous cart & set new mobile
      clearCart();
      localStorage.setItem("userMobile", mobile);

      // ✅ Fetch new user's cart via context
      await fetchCart();

      alert("Login Successful!");
      navigate("/homepage");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login Failed: " + error.message);
    }
  };

  return (
    <div className="login-container">
      <img src={Backimage} alt="Background" className="background-image" />
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="number"
          placeholder="Enter Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign up here</span>
        </p>
      </div>
    </div>
  );
};
