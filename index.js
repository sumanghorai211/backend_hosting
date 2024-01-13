const express = require("express");
const app = express();
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("hi the app is working");
});
app.listen(process.env.PORT, (req, res) => {
  console.log(`app is listening on port no ${process.env.PORT}`);
});
