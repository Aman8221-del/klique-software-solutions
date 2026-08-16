const express = require("express");
const {
  createContactMessage,
  getContactMessages,
  deleteContactMessage,
} = require("../controllers/contactController");

const { protectAdmin } = require("../middleware/authMiddleware");

const publicRouter = express.Router();
const adminRouter = express.Router();

publicRouter.post("/", createContactMessage);

adminRouter.get("/", protectAdmin, getContactMessages);

adminRouter.delete("/:id", protectAdmin, deleteContactMessage);

module.exports = {
  publicRouter,
  adminRouter,
};
