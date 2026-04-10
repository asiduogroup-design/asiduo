const express = require("express");
const {
  createInquiry,
  getInquiries
} = require("../controllers/inquiryController");
const { protect, authorize } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(createInquiry).get(protect, authorize("admin"), getInquiries);

module.exports = router;
