const express = require("express");
const router = express.Router();

const {
  getApplications,
  viewResume,
  downloadResume,
} = require("../controllers/applicationController");

router.get("/applications", getApplications);

router.get("/applications/:id/resume", viewResume);

router.get("/applications/:id/resume/download", downloadResume);

module.exports = router;
