const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      trim: true
    },
    company: {
      type: String,
      trim: true
    },
    country: {
      type: String,
      trim: true
    },
    gstNumber: {
      type: String,
      trim: true
    },
    partyType: {
      type: String,
      enum: ["buyer", "supplier", ""],
      default: ""
    },
    partySubType: {
      type: String,
      enum: ["wholesaler", "retailer", "consumer", ""],
      default: ""
    },
    serviceType: {
      type: String,
      enum: ["import", "export", ""],
      default: ""
    },
    productInterest: {
      type: String,
      required: [true, "Product interest is required"],
      trim: true
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true
    },
    inquiryType: {
      type: String,
      enum: ["general", "quote"],
      default: "general"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Inquiry", inquirySchema);
