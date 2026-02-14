const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

// Routes
app.use("/api/users", require("./routes/users"));

mongoose
  .connect(process.env.MONGO_URL)
  .then(() =>
    app.listen(port, () => {
      console.log("Server running on atlas properly");
    }),
  )
  .catch((err) => console.log("monogDB connection Error: ", err));
