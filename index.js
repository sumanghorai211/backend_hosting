const express = require("express");
const app = express();
require("dotenv").config();
app.get("/", (req, res) => {
  res.send("hi the app is working");
});
app.get("/check", (req, res) => {
  res.send("hi the app is working and checking is also successful");
});

app.listen(process.env.PORT, (req, res) => {
  console.log(`app is listening on port no ${process.env.PORT}`);
});
