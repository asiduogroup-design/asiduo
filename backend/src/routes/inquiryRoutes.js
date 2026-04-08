const express = require("express");
const {
  createInquiry,
  getInquiries
} = require("../controllers/inquiryController");

const router = express.Router();

router.route("/").post(createInquiry).get(getInquiries);

module.exports = router;
