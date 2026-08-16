require("dotenv").config({
  quiet: true,
});

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const contactRoutes = require("./src/routes/contactRoute");
const authRoutes = require("./src/routes/authRoutes");
const jobRoutes = require("./src/routes/jobRoutes");

const applicationRoutes = require("./src/routes/applicationsRoutes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Admin auth
app.use("/api/adinm", authRoutes);

// Public contact form
app.use("/api/contact", contactRoutes.publicRouter);

// Admin messages
app.use("/api/admin/messages", contactRoutes.adminRouter);

// Jobs

app.use("/api/jobs", jobRoutes);

// applications
app.use("/api/applications", applicationRoutes);

module.exports = app;
