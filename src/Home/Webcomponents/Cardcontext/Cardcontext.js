import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CardContext = createContext();
export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cart, setCart] = useState([]);
  const mobileNumber = localStorage.getItem("mobileNumber");

  const [currentMobile, setCurrentMobile] = useState(localStorage.getItem("userMobile"));

  // // Add to cart
  // const addToCart = async (item) => {
  //   const mobile = localStorage.getItem("userMobile");
  //   if (!mobile) return;
  //   try {
  //     await axios.post("http://localhost:5000/api/cart/add", { mobile, item });
  //     await fetchCart();
  //   } catch (err) {
  //     console.error("Failed to add item:", err);
  //   }
  // };
//---------------------------------------------------------------------------------------------> paste here 

  // // Remove from cart
  // const removeFromCart = async (itemName) => {
  //   const mobile = localStorage.getItem("userMobile");
  //   if (!mobile) return;
  //   try {
  //     await axios.delete(`http://localhost:5000/api/cart/remove/${mobile}/${itemName}`);
  //     await fetchCart();
  //   } catch (err) {
  //     console.error("Failed to remove item:", err);
  //   }
  // };
//---------------------------------------------------------------------------->

const addToCart = async (item) => {
  try {
    if (mobileNumber) {
      await axios.post("http://localhost:5000/addtocart", {
        mobileNumber,
        item,
      });
      fetchCart(); // Refresh cart items after adding
    }
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
};


const removeFromCart = async (itemId) => {
  try {
    if (mobileNumber) {
      await axios.post("http://localhost:5000/removefromcart", {
        mobileNumber,
        itemId,
      });
      fetchCart(); // Refresh cart items after removing
    }
  } catch (error) {
    console.error("Error removing from cart:", error);
  }
};




const updateQuantity = async (itemId, quantity) => {
  try {
    if (mobileNumber) {
      await axios.post("http://localhost:5000/updatecartitem", {
        mobileNumber,
        itemId,
        quantity,
      });
      fetchCart(); // Refresh cart items after updating
    }
  } catch (error) {
    console.error("Error updating cart item:", error);
  }
};


  // Clear cart
  const clearCart = () => {
    setCartItems([]);
    setCart([]);
  };

//-------------------------------------------------------------------------------->

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
    try {
      if (mobileNumber) {
        const res = await axios.get(`http://localhost:5000/getcart/${mobileNumber}`);
        setCartItems(res.data.items || []);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };
  






  useEffect(() => {
    fetchCart();
  }, [mobileNumber]);
  
  
//----------------------------------------------------------->incrmet
// In CartContext.js
const incrementQuantity = async (itemName) => {
  const mobile = localStorage.getItem("userMobile");
  if (!mobile) return;

  // Local optimistic update
  setCartItems(prev =>
    prev.map(item =>
      item.name === itemName ? { ...item, quantity: item.quantity + 1 } : item
    )
  );

  // Backend update
  try {
    await axios.post(`http://localhost:5000/api/cart/addquantity`, { mobile, name: itemName });
  } catch (err) {
    console.error("Failed to increment quantity", err);
  }
};

const decrementQuantity = async (itemName) => {
  const mobile = localStorage.getItem("userMobile");
  if (!mobile) return;

  // Local optimistic update
  setCartItems(prev =>
    prev
      .map(item =>
        item.name === itemName ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)
  );

  // Backend update45
  try {
    await axios.post(`http://localhost:5000/api/cart/decreasequantity`, { mobile, name: itemName });
  } catch (err) {
    console.error("Failed to decrement quantity", err);
  }
};

//-------------------------------------------------------> endshere
  


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
