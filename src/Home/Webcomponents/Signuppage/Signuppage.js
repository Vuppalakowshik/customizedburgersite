import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import Backimage from "../../../Assets/images/React App_files/backgroundimage.jpg";

export const Signup = () => {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

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
  
      if (response.status === 409) {
        // 409 Conflict → number already exists
        alert("Mobile number already exists, please login.");
        navigate("/login");
      } else if (response.ok) {
        // Successful signup
        localStorage.setItem("userMobile", mobile);
        alert("Signup successful!");
        navigate("/homepage");
      } else {
        alert("Failed to signup. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong. Please try again.");
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
