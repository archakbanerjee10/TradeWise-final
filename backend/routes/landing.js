import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// LANDING PAGES
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/landing_page/home.html"));
});

router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/landing_page/home.html"));
});



router.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/landing_page/signup/signup.html"));
});

router.get("/markets", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/landing_page/markets.html"));
});

router.get("/pricing", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/landing_page/pricing.html"));
});

router.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/landing_page/about.html"));
});

router.get("/support", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/landing_page/support.html"));
});

router.get("/brokerage", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/landing_page/bokerage.html"));
});

router.get("/margin", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/landing_page/margin.html"));
});

router.get("/sip", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/landing_page/sip.html"));
});

export default router;
