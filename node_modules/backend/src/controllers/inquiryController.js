const Inquiry = require("../models/Inquiry");

const createInquiry = async (req, res, next) => {
  try {
    const inquiry = await Inquiry.create(req.body);

    res.status(201).json({
      success: true,
      message: "Inquiry submitted successfully",
      data: inquiry
    });
  } catch (error) {
    next(error);
  }
};

const getInquiries = async (req, res, next) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createInquiry,
  getInquiries
};
