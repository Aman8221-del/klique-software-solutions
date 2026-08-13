require("dotenv").config({
  quiet: true,
});

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const contactRoutes = require("./src/routes/contactRoute");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/contact", contactRoutes);

module.exports = app;
