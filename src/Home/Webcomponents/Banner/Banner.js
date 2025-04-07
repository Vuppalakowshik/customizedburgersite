import React, { useContext } from "react";
import logo from "../../../Assets/images/Logoimage.png";
import Banner from "../../../Assets/images/Bannerimage.png";
import "./Banner.css";
import { Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { Button, Dropdown, Space, Input } from "antd";
import { DownOutlined, SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../Cardcontext/Cardcontext"; // ✅ Use the actual context, not the provider

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



  const getTotalCount = () => {
    const cartItems = context?.cartItems || [];
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="Homepage">
      {/* ✅ Header Section */}
      <div className="Header">
        <div className="LogoContainer">
          <img src={logo} alt="Brrrgrrr Logo" className="Logo" />
        </div>

        <div className="SearchContainer">
          <Search
            placeholder="Search for burgers..."
            enterButton={<SearchOutlined />}
            className="SearchBar"
            onSearch={(value) => console.log("Searching:", value)}
          />
        </div>

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
          <Button className="custom-button">Login</Button>
          <Button className="custom-button">Signup</Button>
        </div>
      </div>

      {/* ✅ Banner Section */}
      <div className="BannerContainer">
        <img src={Banner} alt="Banner" className="BannerImage" />
      </div>
    </div>
  );
};
