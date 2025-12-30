import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

// dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersFile = path.join(__dirname, "../data/users.json");

/* -------------------- GET MARKET DATA -------------------- */
router.get("/market", (req, res) => {
  res.json([
    { symbol: "RELIANCE", price: 2900 },
    { symbol: "TATASTEEL", price: 145 },
    { symbol: "INFY", price: 1580 }
  ]);
});

/* -------------------- POST SIGNUP -------------------- */
router.post("/signup", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "Missing fields" });
  }

  let users = [];

  if (fs.existsSync(usersFile)) {
    users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));
  }

  users.push({ name, email });

  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

  res.json({ message: "Signup successful" });
});

export default router;

let orders = [];

/* ---------- CREATE ORDER ---------- */
router.post("/orders", (req, res) => {
  const { stock, price, quantity, type } = req.body;

  if (!stock || !price || !quantity || !type) {
    return res.status(400).json({ message: "Missing order data" });
  }

  const order = {
    id: Date.now(),
    stock,
    price,
    quantity,
    type, // buy or sell
    time: new Date().toLocaleString()
  };

  orders.push(order);
  res.json({ message: "Order placed", order });
});

/* ---------- GET ORDERS ---------- */
router.get("/orders", (req, res) => {
  res.json(orders);
});
