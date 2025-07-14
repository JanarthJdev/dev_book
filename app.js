// app.js
const express = require("express");
const healthRoutes = require("./routes/health.routes");
const loggerMiddleware = require("./middlewares/logger.middleware");
const userRoutes = require("./routes/user.routes");
const profileRoutes = require("./routes/profile.routes");
const connectDB = require("./config/db.config");
const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(loggerMiddleware); // Custom logger
connectDB();

// Routes
app.use("/api/health", healthRoutes);
app.use("/api/users", userRoutes);
app.use("/api/profile", profileRoutes);

// 404 Route Handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route Not Found" });
});

module.exports = app;
