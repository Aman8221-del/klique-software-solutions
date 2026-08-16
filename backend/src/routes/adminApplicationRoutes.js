const express = require("express");
const router = express.Router();

const { getApplications } = require("../controllers/applicationController");

router.get("/applications", getApplications);

module.exports = router;
