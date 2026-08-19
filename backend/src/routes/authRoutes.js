const express = require("express");
const router = express.Router();

const { loginAdmin, createAdmin } = require("../controllers/authController");

const protectAdmin = require("../middleware/authMiddleware");

router.post("/login", loginAdmin);

// Protected route
router.post("/signup", protectAdmin, createAdmin);

module.exports = router;
