const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
      enum: ["export", "import", "technical"]
    },
    description: {
      type: String,
      required: [true, "Product description is required"],
      trim: true
    },
    images: {
      type: [String],
      default: []
    },
    originCountry: {
      type: String,
      required: [true, "Origin country is required"],
      trim: true
    },
    packaging: {
      type: String,
      required: [true, "Packaging details are required"],
      trim: true
    },
    MOQ: {
      type: String,
      required: [true, "Minimum order quantity is required"],
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Product", productSchema);
