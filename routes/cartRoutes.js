import express from "express";
import Cart from "../models/cart.js";

const router = express.Router();

// Add to cart route
router.post('/add', async (req, res) => {
  try {
    const { userId, product } = req.body;

    // Check if a cart exists for the user
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // If no cart exists, create a new one
      cart = new Cart({ userId, items: [] });
    }

    // Add product to cart items
    cart.items.push(product);

    // Save the updated cart
    await cart.save();

    return res.status(200).json(cart);
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ error: 'Failed to add to cart' });
  }
});

// Clear cart route (optional)
router.delete('/clear', async (req, res) => {
  const { userId } = req.body;
  try {
    let cart = await Cart.findOne({ userId });
    if (cart) {
      cart.items = [];
      await cart.save();
      res.status(200).json({ message: 'Cart cleared' });
    } else {
      res.status(404).json({ message: 'Cart not found' });
    }
  } catch (err) {
    console.error("Error clearing cart:", err);
    res.status(500).json({ error: 'Failed to clear cart' });
  }
});

export default router;
