import React, { useEffect } from 'react';
import { useCart } from "../Cardcontext/Cardcontext.js";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ViewCart = () => {
  const { cartItems, fetchCart, addToCart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const mobile = localStorage.getItem("userMobile");

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handlePlaceOrder = async () => {
    try {
      if (!mobile) return alert("Please login first!");
      const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      await axios.post(`http://localhost:5000/api/orders/placeorder`, {
        mobile,
        cartItems,
        totalAmount,
      });
      alert("Order placed successfully!");
      await axios.delete(`http://localhost:5000/api/cart/clear/${mobile}`);
      clearCart();
    } catch (err) {
      console.error("Order placing failed:", err);
      alert("Order failed.");
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
      <div onClick={() => navigate(-1)} style={{ cursor: "pointer", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
        <ArrowLeftOutlined />
        <span>Back</span>
      </div>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "8px" }}>
              <img src={item.img} alt={item.name} width={80} />
              <div style={{ flex: 1, marginLeft: "20px" }}>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ₹{item.price * item.quantity}</p>
              </div>
              <div>
                <button onClick={() => addToCart(item)} style={{ padding: "5px 10px", backgroundColor: "#FF5733", color: "#fff", border: "none", borderRadius: "5px", marginRight: "8px" }}>Add</button>
                <button onClick={() => removeFromCart(item.name)} style={{ padding: "5px 10px", backgroundColor: "#888", color: "#fff", border: "none", borderRadius: "5px" }}>Remove</button>
              </div>
            </div>
          ))}
          <hr />
          <h3>Total Amount: ₹{totalAmount}</h3>
          <button onClick={handlePlaceOrder} style={{ padding: "10px 20px", backgroundColor: "#FF5733", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "20px" }}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
};
