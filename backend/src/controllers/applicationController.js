const Application = require("../models/appilaction.model");
const Job = require("../models/jobs.model");
const cloudinary = require("../config/cloudinary");

// ==========================================
// Apply For Job
// ==========================================
const applyForJob = async (req, res) => {
  try {
    const { jobId, name, email, message, phone, position } = req.body;

    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    // Required fields
    if (!name || !phone || !email || !req.file) {
      return res.status(400).json({
        success: false,
        message: "Name, phone, email and resume are required.",
      });
    }

    if (!jobId && !position) {
      return res.status(400).json({
        success: false,
        message: "Job ID or position is required",
      });
    }

    // Check job exists (only when applying to a specific posted job)
    if (jobId) {
      const job = await Job.findById(jobId);

      if (!job) {
        return res.status(404).json({
          success: false,
          message: "Job not found",
        });
      }
    }

    // Upload resume to Cloudinary
    const uploadResult = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "klique/resumes",
          resource_type: "raw",
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        },
      );

      uploadStream.end(req.file.buffer);
    });

    // Save application
    const application = await Application.create({
      job: jobId || undefined,
      position: position || "",
      name,
      email,
      phone: phone || "",
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

// ==========================================
// Admin - Get All Applications
// ==========================================
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

// ==========================================
// Admin - View Resume
// ==========================================
const viewResume = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    if (!application.resumeUrl) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    const response = await fetch(application.resumeUrl);

    if (!response.ok) {
      return res.status(500).json({
        success: false,
        message: "Unable to fetch resume",
      });
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    res.status(200);

    res.setHeader("Content-Type", "application/pdf");

    res.setHeader("Content-Disposition", `inline; filename="resume.pdf"`);

    res.setHeader("Content-Length", buffer.length);

    res.send(buffer);
  } catch (error) {
    console.error("View resume error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to view resume",
    });
  }
};

// ==========================================
// Admin - Download Resume
// ==========================================
const downloadResume = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    if (!application.resumeUrl) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    // Fetch file from Cloudinary
    const response = await fetch(application.resumeUrl);

    if (!response.ok) {
      return res.status(500).json({
        success: false,
        message: "Unable to fetch resume",
      });
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    // Set headers for download
    res.setHeader(
      "Content-Type",
      response.headers.get("content-type") || "application/pdf",
    );

    res.setHeader("Content-Disposition", 'attachment; filename="resume.pdf"');

    res.send(buffer);
  } catch (error) {
    console.error("Download resume error:", error);

    res.status(500).json({
      success: false,
      message: error.message || "Failed to download resume",
    });
  }
};

const deleteApplication = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id);

    if (!application) {
      return res.status(404).json({
        success: false,
        message: "Application not found",
      });
    }

    // Delete application from MongoDB
    await Application.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    console.error("Delete application error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete application",
    });
  }
};

// ==========================================
// Exports
// ==========================================
module.exports = {
  applyForJob,
  getApplications,
  viewResume,
  downloadResume,
  deleteApplication,
};
