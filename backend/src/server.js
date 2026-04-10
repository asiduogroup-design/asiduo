const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDatabase = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const authRoutes = require("./routes/authRoutes");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

dotenv.config();

const app = express();

const ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "https://asiduo-frontend.vercel.app",
  ...(process.env.CLIENT_URL || "").split(",").map((u) => u.trim()).filter(Boolean)
];

// Manual CORS middleware — guarantees headers are always sent on cloud hosts
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (!origin || ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
  }
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
});
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(
  morgan("dev", {
    skip: (req, res) => res.statusCode === 304 || req.path === "/api/health"
  })
);

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Asiduo Enterprises API is running"
  });
});

app.use("/api/products", productRoutes);
app.use("/api/inquiry", inquiryRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/auth", authRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDatabase();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

startServer();
