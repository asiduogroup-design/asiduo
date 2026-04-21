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
    const { country, serviceType, partyType } = req.query;
    const filter = {};
    if (country) filter.country = { $regex: country, $options: "i" };
    if (serviceType) filter.serviceType = serviceType;
    if (partyType) filter.partyType = partyType;

    const inquiries = await Inquiry.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (error) {
    next(error);
  }
};

const deleteInquiry = async (req, res, next) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
    if (!inquiry) {
      return res.status(404).json({ success: false, message: "Inquiry not found" });
    }
    res.status(200).json({ success: true, message: "Inquiry deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createInquiry,
  getInquiries,
  deleteInquiry
};
