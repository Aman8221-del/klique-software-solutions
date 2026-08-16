const express = require("express");
const router = express.Router();

const {
  applyForJob,
  getApplications,
} = require("../controllers/applicationController");

const uploadResume = require("../middleware/uploadResume");

//user apply
router.post("/apply", uploadResume.single("resume"), applyForJob);

// Admin applications
router.get("/admin/applications", getApplications);
module.exports = router;
