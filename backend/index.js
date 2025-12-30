import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import ordersRoutes from "./routes/orders.js";
import landingRoutes from "./routes/landing.js";
import dashboardRoutes from "./routes/dashboard.js";







import apiRoutes from "./routes/api.js";

const app = express();
const PORT = process.env.PORT || 5000;


// fix __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// middleware
app.use(cors());
app.use(express.json());

// serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

// API routes
app.use("/api", apiRoutes);


app.use("/api/orders", ordersRoutes);


// default route (optional but good)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

app.use("/", landingRoutes);
app.use("/dashboard", dashboardRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
