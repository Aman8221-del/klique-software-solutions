const Application = require("../models/appilaction.model");
const Job = require("../models/jobs.model");
const cloudinary = require("../config/cloudinary");

const applyForJob = async (req, res) => {
  try {
    const { jobId, name, email, message } = req.body;
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    // Required fields check
    if (!jobId || !name || !email) {
      return res.status(400).json({
        success: false,
        message: "Job ID, name and email are required",
      });
    }

    // Resume check
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume is required",
      });
    }

    // Check job exists
    const job = await Job.findById(jobId);

    if (!job) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }

    // Upload resume to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "klique/resumes",
          resource_type: "raw",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        },
      );

      uploadStream.end(req.file.buffer);
    });

    // Save application in MongoDB
    const application = await Application.create({
      job: jobId,
      name,
      email,
      message,
      resumeUrl: uploadResult.secure_url,
      resumePublicId: uploadResult.public_id,
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully",
      data: application,
    });
  } catch (error) {
    console.error("Application error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to submit application",
    });
  }
};

//Admin: show all applications

const getApplications = async (req, res) => {
  try {
    const applications = await Application.find()
      .populate("job", "title department")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: applications,
    });
  } catch (error) {
    console.error("Get applications error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to fetch applications",
    });
  }
};

module.exports = {
  applyForJob,
  getApplications,
};
