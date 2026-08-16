const express = require("express");
const {
  createContactMessage,
  getContactMessages,
} = require("../controllers/contactController");

const { protectAdmin } = require("../middleware/authMiddleware");

const publicRouter = express.Router();
const adminRouter = express.Router();

publicRouter.post("/", createContactMessage);

adminRouter.get("/", protectAdmin, getContactMessages);

module.exports = {
  publicRouter,
  adminRouter,
};
