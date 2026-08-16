const express = require("express");
const router = express.Router();

const {
  getApplications,
  viewResume,
  downloadResume,
  deleteApplication,
} = require("../controllers/applicationController");

// Get all applications
router.get("/applications", getApplications);

// View resume
router.get("/applications/:id/resume", viewResume);

// Download resume
router.get("/applications/:id/resume/download", downloadResume);

// Delete application
router.delete("/applications/:id", deleteApplication);

module.exports = router;
