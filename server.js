const express = require("express");
const connectDB = require("./config/db.js");

connectDB();

const app = express();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  `server is running on port ${PORT}...`;
});
