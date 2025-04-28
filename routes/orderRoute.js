import express from "express";
import Order from "../models/order.js";
import Cart from "../models/cart.js";

const router = express.Router();

router.get("/:mobile", async (req, res) => {
  const orders = await Order.find({ mobile: req.params.mobile });
  res.json(orders);
});

router.post("/placeorder", async (req, res) => {
  const { mobile, cartItems, totalAmount } = req.body;
  const newOrder = new Order({ mobile, cartItems, totalAmount });
  await newOrder.save();
  await Cart.deleteOne({ mobile });
  res.status(201).json({ message: "Order placed successfully" });
});

export default router;
