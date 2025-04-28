import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  mobile: String,
  cartItems: Array,
  totalAmount: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Order", orderSchema);
