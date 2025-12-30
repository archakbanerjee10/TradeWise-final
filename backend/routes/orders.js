import express from "express";
const router = express.Router();

// TEMP storage (hackathon-safe)
let orders = [];

// POST: Buy / Sell
router.post("/", (req, res) => {
  const { stock, price, quantity, type } = req.body;

  const newOrder = {
    id: Date.now(),
    stock,
    price,
    quantity,
    type, // "BUY" or "SELL"
    time: new Date().toLocaleString()
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// GET: All orders
router.get("/", (req, res) => {
  res.json(orders);
});

export default router;
