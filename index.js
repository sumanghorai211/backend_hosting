const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./Db");
const Course = require("./check");
app.use(
  cors({
    origin: "*",
  })
);
require("dotenv").config();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hi the app is working");
});
const data = [
  {
    name: "suman1",
    class: "10",
    subjects: "math",
  },
  {
    name: "suman2",
    class: "10",
    subjects: "math",
  },
  {
    name: "suman3",
    class: "10",
    subjects: "math",
  },
];
app.get("/check", (req, res) => {
  res.send(data);
});
// console.log(connect());
db.connect();
app.post("/ps", async (req, res) => {
  try {
    var name = req.body.name;
    console.log(req.body.name);
    const c = await Course.create({
      courseName: name,
    });
    if (c) {
      return res.status(200).json({
        success: false,
        message: "All Fields are Mandatory",
      });
    }
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: "All Fields are Mandatory",
    });
  }
});
app.listen(process.env.PORT, (req, res) => {
  console.log(`app is listening on port no ${process.env.PORT}`);
});
