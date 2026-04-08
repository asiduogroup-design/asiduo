const dotenv = require("dotenv");
const connectDatabase = require("../config/db");
const Product = require("../models/Product");
const Category = require("../models/Category");
const Inquiry = require("../models/Inquiry");
const { products, categories } = require("./sampleData");

dotenv.config();

const seedDatabase = async () => {
  try {
    await connectDatabase();

    await Promise.all([
      Product.deleteMany(),
      Category.deleteMany(),
      Inquiry.deleteMany()
    ]);

    await Category.insertMany(categories);
    await Product.insertMany(products);

    console.log("Sample data inserted successfully");
    process.exit(0);
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedDatabase();
