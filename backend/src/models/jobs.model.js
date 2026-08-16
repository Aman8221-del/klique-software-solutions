const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    department: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    employmentType: {
      type: String,
      required: true,
      enum: ["Full-time", "Part-time", "Internship", "Contract"],
    },

    experience: {
      type: String,
      trim: true,
    },

    salary: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      required: true,
    },

    responsibilities: {
      type: String,
      default: "",
    },

    requirements: {
      type: [String],
      default: [],
    },

    status: {
      type: String,
      enum: ["Live", "Draft", "Closed"],
      default: "Draft",
    },
  },
  {
    timestamps: true,
  },
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
