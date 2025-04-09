import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Backimage from "../../../Assets/images/React App_files/backgroundimage.jpg"

export const Signup = () => {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (mobile.length === 10) {
      localStorage.setItem("userMobile", mobile);
      navigate("/homepage");
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  return (
    <div className="signup-container">
  <img src={Backimage} alt="Background" className="background-image" />
  
  <div className="signup-box">
    <h2>Sign Up</h2>
    <input
      type="text"
      placeholder="Enter Mobile Number"
      value={mobile}
      onChange={(e) => setMobile(e.target.value)}
    />
    <button onClick={handleSignup}>Sign Up</button>
    <p>
      Already have an account?{" "}
      <span onClick={() => navigate("/login")}>Login here</span>
    </p>
  </div>
</div>

  );
};
