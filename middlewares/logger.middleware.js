// middlewares/logger.middleware.js
const loggerMiddleware = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = loggerMiddleware;
