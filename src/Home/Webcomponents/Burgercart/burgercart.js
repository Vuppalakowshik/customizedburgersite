
import React from 'react';
import { useCart } from  "../Cardcontext/Cardcontext"; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';

export const BurgerCard = ({ burger }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addToCart(burger);
    navigate('/cart');
  };

  return (
    <div style={{ border: '1px solid gray', padding: 10, margin: 10 }}>
      <img src={burger.img} alt={burger.name} width={80} />
      <h3>{burger.name}</h3>
      <p>Price: ₹{burger.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};
