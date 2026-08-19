const express = require("express");

const router = express.Router();

const {
  createJob,
  getAllJobs,
  getPublicJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

// Create Job
router.post("/", createJob);

// Get All Jobs
// Admin panel ke liye — Draft + Open + Closed
router.get("/", getAllJobs);

// Get Public Jobs
// Website ke liye — sirf Open + Closed
router.get("/public", getPublicJobs);

// Get Single Job
router.get("/:id", getJobById);

// Update Job
router.put("/:id", updateJob);

// Delete Job
router.delete("/:id", deleteJob);

module.exports = router;
