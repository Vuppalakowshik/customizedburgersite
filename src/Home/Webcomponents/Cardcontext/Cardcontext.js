import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CardContext = createContext();
export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentMobile, setCurrentMobile] = useState(localStorage.getItem("userMobile"));

  // Add to cart
  const addToCart = async (item) => {
    const mobile = localStorage.getItem("userMobile");
    if (!mobile) return;
    try {
      await axios.post("http://localhost:5000/api/cart/add", { mobile, item });
      await fetchCart();
    } catch (err) {
      console.error("Failed to add item:", err);
    }
  };

  // Add product (if needed)
  const addProductToCart = async (product) => {
    try {
      const userId = 'userId';
      const res = await axios.post('/api/cart/add', { userId, product });
      setCart(res.data.items);
    } catch (err) {
      console.error('Failed to add to cart:', err);
    }
  };

  // Fetch cart
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

  // Remove from cart
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

  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    setCart([]);
  };

  // 👇 Detect mobile number changes and reset cart
  useEffect(() => {
    const interval = setInterval(() => {
      const storedMobile = localStorage.getItem("userMobile");
      if (storedMobile !== currentMobile) {
        setCurrentMobile(storedMobile);
        clearCart();
        if (storedMobile) {
          fetchCart();
        }
      }
    }, 500); // checks every 0.5 sec — you can adjust

    return () => clearInterval(interval);
  }, [currentMobile]);

  const incrementQuantity = async (itemName) => {
    const mobile = localStorage.getItem("userMobile");
    if (!mobile) return;
    try {
      await axios.post(`http://localhost:5000/api/cart/increment/${mobile}`, { name: itemName });
      await fetchCart();
    } catch (err) {
      console.error("Failed to increment quantity", err);
    }
  };
  
  const decrementQuantity = async (itemName) => {
    const mobile = localStorage.getItem("userMobile");
    if (!mobile) return;
    try {
      await axios.post(`http://localhost:5000/api/cart/decrement/${mobile}`, { name: itemName });
      await fetchCart();
    } catch (err) {
      console.error("Failed to decrement quantity", err);
    }
  };
  


  return (
    <CartContext.Provider value={{
      cartItems,
      cart,
      setCartItems,
      fetchCart,
      addToCart,
      addProductToCart,
      removeFromCart,
      clearCart,
      incrementQuantity,   
  decrementQuantity,
    }}>
      {children}
    </CartContext.Provider>
  );
};
