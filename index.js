const express = require("express");
const cors = require("cors");
const app = express();
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

app.listen(process.env.PORT, (req, res) => {
  console.log(`app is listening on port no ${process.env.PORT}`);
});
