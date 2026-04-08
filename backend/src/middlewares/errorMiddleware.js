const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: error.message || "Internal server error",
    stack: process.env.NODE_ENV === "production" ? undefined : error.stack
  });
};

const notFound = (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`
  });
};

module.exports = {
  errorHandler,
  notFound
};
