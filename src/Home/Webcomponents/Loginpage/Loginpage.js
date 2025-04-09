import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Backimage from "../../../Assets/images/React App_files/backgroundimage.jpg";

export const Login = () => {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const savedMobile = localStorage.getItem("userMobile");
    if (mobile === savedMobile) {
      navigate("/homepage");
    } else {
      alert("Invalid mobile number. Please sign up first.");
    }
  };

  return (
    <div className="login-container">
      <img src={Backimage} alt="Background" className="background-image" />

      <div className="login-box">
        <h2>Login</h2>
        <input
          type="text"
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
