const express = require("express");
const {
  createInquiry,
  getInquiries,
  deleteInquiry
} = require("../controllers/inquiryController");
const { protect, authorize } = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").post(createInquiry).get(protect, authorize("admin"), getInquiries);
router.route("/:id").delete(protect, authorize("admin"), deleteInquiry);

module.exports = router;
