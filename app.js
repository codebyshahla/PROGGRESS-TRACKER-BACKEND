// index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const mongoose = require("./Config/Config");
app.use(cors());
app.use(express.json());

// Define routes here..
app.post("/signup", async (req, res) => {
  const { username, email, mobileNumber, password, confirmPassword } = req.body;
  console.log(req.body);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
