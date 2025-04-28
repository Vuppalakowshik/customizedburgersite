export const fetchCart = async (mobile, setCartItems) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${mobile}`);
      if (response.ok) {
        const cartData = await response.json();
        localStorage.setItem("cartItems", JSON.stringify(cartData));
        setCartItems(cartData); // Update React context
      } else {
        console.warn("Cart not found or invalid response");
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };