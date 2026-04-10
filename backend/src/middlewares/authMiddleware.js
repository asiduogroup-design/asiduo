const jwt = require("jsonwebtoken");
const User = require("../models/User");
const AppError = require("../utils/appError");

const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

    if (!token) {
      return next(new AppError("Unauthorized access", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "dev-jwt-secret");
    const user = await User.findById(decoded.id);

    if (!user) {
      return next(new AppError("User no longer exists", 401));
    }

    req.user = {
      id: user._id,
      role: user.role,
      email: user.email,
      name: user.name
    };

    next();
  } catch (error) {
    return next(new AppError("Invalid or expired token", 401));
  }
};

const authorize = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    return next(new AppError("Forbidden: insufficient permissions", 403));
  }
  next();
};

module.exports = {
  protect,
  authorize
};
