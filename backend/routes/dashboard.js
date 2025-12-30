import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// /dashboard
router.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../frontend/app/dashboard/dashboard.html")
  );
});

// /dashboard/markets
router.get("/markets", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../frontend/app/dashboard/markets.html")
  );
});

// /dashboard/funds 
router.get("/funds", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../frontend/app/dashboard/funds.html")
  );
});

// /dashboard/orders
router.get("/orders", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../frontend/app/dashboard/orders.html")
  );
});

// /dashboard/portfolio
router.get("/portfolio", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../frontend/app/dashboard/portfolio.html")
  );
});

// /dashboard/news
router.get("/news", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../frontend/app/dashboard/news.html")
  );
});

// /dashboard/support
router.get("/support", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../../frontend/app/dashboard/support.html")
  );
});

export default router;
