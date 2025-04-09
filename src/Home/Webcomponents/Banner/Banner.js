import React, { useContext } from "react";
import logo from "../../../Assets/images/Logoimage.png";
import Banner from "../../../Assets/images/Bannerimage.png";
import "./Banner.css";
import { Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Navbar } from "../Navbar/navbar";
import { useLocation } from 'react-router-dom';
import { Button, Dropdown, Space, Input } from "antd";
import { DownOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../Cardcontext/Cardcontext"; 

const { Search } = Input;




export const BannerComponent = () => {
  const context = useContext(CartContext); 
  const navigate = useNavigate();
  const navMenuItems = [

    {
      key: "0",
      label: "Home",
      onClick: () => navigate("/homepage"),
    },
    {
      key: "1",
      type: "group",
      label: "BURGERS", 
      children: [
        {
          key: "1-1",
          label: "VEG",
          onClick: () => navigate("/vegburgers"),
        },
        {
          key: "1-2",
          label: "NON VEG BURGERS",
          onClick: () => navigate("/nonvegburgers"),
        },
      ],
    },
    {
      key: "2",
      label: "Dips & Toppings",
      children: [
        {
          key: "2-1",
          label: "DIPS",
          onClick: () => navigate("/customizeburger"),
        },
        {
          key: "2-2",
          label: "Toppings",
          onClick: () => navigate("/customizeburger"),
        },
      ],
    },
 
  ];
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/homepage':
        return "You are in Home Page";
      case '/vegburgers':
        return "You are in Veg Burgers Page";
      case '/nonvegburgers':
        return "You are in Non-Veg Burgers Page";
      case '/customizeburger':
        return "You are in Dipsandtoppins Page";
      default:
        return "";
    }
  };
  


  const getTotalCount = () => {
    const cartItems = context?.cartItems || [];
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  
  const handleLogout = () => {
    localStorage.removeItem("userMobile"); // Clear saved login
    navigate("/login"); // Redirect to login
  };


  return (
    <div className="Homepage">
      <div className="page-title-indicator">
  <p>{getPageTitle()}</p>
</div>

  
  <div className="mobile-navbar">
  <div className="mobile-nav-top">
    <Navbar />

    {/* 🛒 Add to Cart Icon beside hamburger */}
    <div className="mobile-cart-icon" onClick={() => navigate("/viewcart")}>
      <Badge count={getTotalCount()} showZero>
        <ShoppingCartOutlined style={{ fontSize: 24, cursor: "pointer", color: "#000" }} />
      </Badge>
    </div>
  </div>
</div>

  
    {/* ✅ Desktop Navbar Only */}
    <div className="desktop-navbar">
      <div className="Header">
        <Link to="/homepage" style={{ textDecoration: 'none' }}>
          <div className="logo">
            <img src={logo} alt="Brrrgrrr" style={{ cursor: 'pointer', borderRadius: "20px"}} />
          </div>
          
        </Link>
  
  
  
        <div className="TopRightButtons">
          <div style={{ marginRight: "20px", padding: "10px" }}>
            <div className="cart-icon" onClick={() => navigate("/viewcart")}>
              <Badge count={getTotalCount()} showZero>
                <ShoppingCartOutlined style={{ fontSize: 24, cursor: "pointer" }} />
              </Badge>
            </div>
          </div>
  
          <Button>
            <Dropdown menu={{ items: navMenuItems }}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>menu <DownOutlined /></Space>
              </a>
            </Dropdown>
          </Button>
          <div className="banner-buttons">
          <button className="banner-btn login-btn" onClick={handleLoginClick}>
            Login
          </button>
          <button className="banner-btn signup-btn" onClick={handleSignupClick}>
            Sign Up
          </button>
          <button className="nav-btn logout-button" onClick={handleLogout}>Logout</button>
        </div>
        </div>
      </div>
    </div>
  
    {/* ✅ Banner Section */}
    <div className="BannerContainer">
      <img src={Banner} alt="Banner" className="BannerImage" />
    </div>
  </div>
  
  );
};
