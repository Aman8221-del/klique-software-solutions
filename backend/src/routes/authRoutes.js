const express = require("express");
const router = express.Router();

const {
  loginAdmin,
  createAdmin,
  getAdmins,
  updateAdmin,
  deleteAdmin,
} = require("../controllers/authController");

const { protectAdmin } = require("../middleware/authMiddleware");

// Admin Login
router.post("/login", loginAdmin);

// Protected Admin Management Routes
router.post("/admins", protectAdmin, createAdmin);
router.get("/admins", protectAdmin, getAdmins);
router.put("/admins/:id", protectAdmin, updateAdmin);
router.delete("/admins/:id", protectAdmin, deleteAdmin);

module.exports = router;