const express = require("express");
const router = express.Router();

const { applyForJob } = require("../controllers/applicationController");
const uploadResume = require("../middleware/uploadResume");

router.post(
  "/apply",
  uploadResume.single("resume"),
  applyForJob
);

module.exports = router;