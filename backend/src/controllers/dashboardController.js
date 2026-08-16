const Contact = require("../models/ContactMessage");
const Job = require("../models/jobs.model");
const Application = require("../models/appilaction.model");

const getDashboardStats = async (req, res) => {
  try {
    const [
      totalMessages,
      activeJobs,
      totalApplications,
      newApplications,
      recentMessages,
      recentApplications,
    ] = await Promise.all([
      // Total Messages
      Contact.countDocuments(),

      // Active Jobs
      Job.countDocuments({ status: "Active" }),

      // Total Applications
      Application.countDocuments(),

      // New Applications
      Application.countDocuments({ status: "New" }),

      // Recent Messages
      Contact.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("name subject status createdAt"),

      // Recent Applications
      Application.find()
        .populate("job", "title")
        .sort({ createdAt: -1 })
        .limit(5)
        .select("name job createdAt"),
    ]);

    return res.status(200).json({
      success: true,

      cards: {
        totalMessages,
        activeJobs,
        totalApplications,
        newApplications,
      },

      recentMessages,
      recentApplications,
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch dashboard stats",
    });
  }
};

module.exports = {
  getDashboardStats,
};