import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import logo from "../../../Assets/images/Logoimage.png"; // Adjust the path as necessary
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("userMobile"); // Clear saved login
    navigate("/login"); // Redirect to login
  };

  return (
    <nav className="navbar">
      <Link to="/homepage" className="logo">
        <img src={logo} alt="Brrrgrrr" />
      </Link>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/homepage">Home</Link></li>
        <li><Link to="/viewcart">View Cart</Link></li>
        <li><Link to="/vegburgers">Vegburger</Link></li>
        <li><Link to="/nonvegburgers">Nonvegburgers</Link></li>
        <li><Link to="/customizeburger">Dips & Toppings</Link></li>
        <li><Link to="/login">Logout</Link></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
};
