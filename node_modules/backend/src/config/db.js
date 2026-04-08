const mongoose = require("mongoose");

const connectDatabase = async () => {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri || typeof mongoUri !== "string") {
    throw new Error(
      "Missing MONGODB_URI in backend/.env. Create backend/.env from backend/.env.example before starting the server."
    );
  }

  try {
    const connection = await mongoose.connect(mongoUri);
    console.log(`MongoDB connected: ${connection.connection.host}`);
    return connection;
  } catch (error) {
    throw new Error(`MongoDB connection failed: ${error.message}`);
  }
};

module.exports = connectDatabase;
