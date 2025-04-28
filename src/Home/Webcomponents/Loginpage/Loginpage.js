import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Backimage from "../../../Assets/images/React App_files/backgroundimage.jpg";
import { CartContext } from "../Cardcontext/Cardcontext.js";
import { fetchCart } from "../Cardcontext/Fetchchart.js";


export const Login = () => {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  const { setCartItems } = useContext(CartContext); // 👈 get the setCartItems function from context

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

      // ✅ Reset everything on login
      localStorage.setItem("userMobile", mobile);
      localStorage.removeItem("cartItems");

      // ✅ Fetch the user's cart immediately and update context + localStorage
      await fetchCart(mobile, setCartItems);

      alert("Login Successful!");
      navigate("/homepage");
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Login Failed: " + error.message);
    }
  };

  const handleSignup = async () => {
    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Signup failed.");
        return;
      }

      localStorage.setItem("userMobile", mobile);
      alert("Signup Successful!");
      navigate("/homepage");
    } catch (error) {
      console.error("Error signing up:", error);
      alert("Signup Failed: " + error.message);
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
