const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDatabase = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

dotenv.config();

const app = express();

const DEFAULT_ALLOWED_ORIGINS = [
  "http://localhost:3000",
  "https://asiduo-frontend.vercel.app"
];

app.use(
  cors({
    origin: (origin, callback) => {
      const fromEnv = (process.env.CLIENT_URL || "")
        .split(",")
        .map((u) => u.trim())
        .filter(Boolean);
      const allowed = [...new Set([...DEFAULT_ALLOWED_ORIGINS, ...fromEnv])];
      // no origin = same-origin / server-to-server / Postman — allow it
      if (!origin || allowed.includes(origin)) {
        callback(null, true);
      } else {
        // return false (403) instead of throwing — avoids 500 + missing CORS header
        callback(null, false);
      }
    },
    credentials: true
  })
);
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
