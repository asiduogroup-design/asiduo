const jwt = require("jsonwebtoken");
const User = require("../models/User");
const AppError = require("../utils/appError");

const signToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET || "dev-jwt-secret", {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d"
  });

const sanitizeUser = (user) => ({
  id: user._id,
  name: user.name,
  email: user.email,
  role: user.role
});

const register = async (req, res, next) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return next(new AppError("Name, email, and password are required", 400));
    }

    const existing = await User.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return next(new AppError("User already exists with this email", 409));
    }

    const user = await User.create({
      name,
      email,
      password,
      role: role === "admin" ? "admin" : "user"
    });

    const token = signToken(user._id);

    res.status(201).json({
      success: true,
      message: "Registration successful",
      token,
      data: sanitizeUser(user)
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new AppError("Email and password are required", 400));
    }

    const user = await User.findOne({ email: email.toLowerCase().trim() }).select("+password");

    if (!user) {
      return next(new AppError("Invalid email or password", 401));
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return next(new AppError("Invalid email or password", 401));
    }

    const token = signToken(user._id);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      data: sanitizeUser(user)
    });
  } catch (error) {
    next(error);
  }
};

const getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return next(new AppError("User not found", 404));
    }

    res.status(200).json({
      success: true,
      data: sanitizeUser(user)
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  register,
  login,
  getMe
};
