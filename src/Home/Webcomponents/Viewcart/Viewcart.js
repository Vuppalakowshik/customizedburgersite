import React from 'react';
import { useCart } from "../Cardcontext/Cardcontext"; // Adjust path if needed

export const ViewCart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalAmount = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>
  
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
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <hr />
          <h3>Total Amount: ₹{totalAmount}</h3>
        </>
      )}
    </div>
  );
};