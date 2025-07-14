// controllers/health.controller.js
const getHealthStatus = (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "API is healthy!",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
};

module.exports = {
  getHealthStatus,
};
