import React from 'react';
import { useCart } from "../Cardcontext/Cardcontext"; // Adjust path if needed
import { ArrowLeftOutlined } from '@ant-design/icons'; // Ant Design icon
import { useNavigate } from 'react-router-dom'; // React Router

export const ViewCart = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();


  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

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
            <div
              key={item.id || index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                border: "1px solid #ccc",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "8px"
              }}
            >
              <img src={item.img} alt={item.name} width={80} />
              <div style={{ flex: 1, marginLeft: "20px" }}>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total: ₹{item.price * item.quantity}</p>
              </div>
              <button onClick={() => removeFromCart(item.name)}>Remove</button>
            </div>
          ))}
          <hr />
          <h3>Total Amount: ₹{totalAmount}</h3>
        </>
      )}
    </div>
  );
};