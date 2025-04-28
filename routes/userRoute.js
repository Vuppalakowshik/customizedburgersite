import express from "express";
import User from "../models/user.js";
import Cart from "../models/cart.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { mobile } = req.body;
  try {
    const existing = await User.findOne({ mobile });
    if (existing) return res.status(400).json({ message: "User already exists" });
    const newUser = new User({ mobile });
    await newUser.save();
    await new Cart({ mobile, items: [] }).save();
    res.status(201).json({ message: "Signup successful" });
  } catch (err) {
    res.status(500).json({ error: "Signup failed" });
  }
});

router.post("/login", async (req, res) => {
  const { mobile } = req.body;
  try {
    const user = await User.findOne({ mobile });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
});

export default router;
