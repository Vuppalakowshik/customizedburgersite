import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CardContext = createContext();
export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]); // New state for updated cart
  const mobile = localStorage.getItem("userMobile");

  // Old addToCart
  const addToCart = async (item, product) => {
    const mobile = localStorage.getItem("userMobile");
    if (!mobile) return;
    try {
      const userId = 'userId';
      // New cart add logic
      const res = await axios.post('/api/cart/add', { userId, product });

      await axios.post("http://localhost:5000/api/cart/add", { mobile, ...item, quantity: 1 });
      await fetchCart();

      // Update both states
      setCartItems(res.data.items);
      setCart(res.data.items);
    } catch (err) {
      console.error("Failed to add item:", err);
    }
  };

  // New simplified addToCart for only product (if needed separately)
  const addProductToCart = async (product) => {
    try {
      const userId = 'userId';
      const res = await axios.post('/api/cart/add', { userId, product });
      setCart(res.data.items);
    } catch (err) {
      console.error('Failed to add to cart:', err);
    }
  };

  const fetchCart = async () => {
    const mobile = localStorage.getItem("userMobile");
    if (!mobile) return;
    try {
      const res = await axios.get(`http://localhost:5000/api/cart/${mobile}`);
      setCartItems(res.data);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
    }
  };

  const removeFromCart = async (itemName) => {
    const mobile = localStorage.getItem("userMobile");
    if (!mobile) return;
    try {
      await axios.delete(`http://localhost:5000/api/cart/remove/${mobile}/${itemName}`);
      await fetchCart();
    } catch (err) {
      console.error("Failed to remove item:", err);
    }
  };

  const clearCart = () => {
    setCartItems([]);
    setCart([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      cart,              // New state available here
      setCartItems,
      fetchCart,
      addToCart,
      addProductToCart,  // Expose new add function if you want
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};
