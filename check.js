const mongoose = require("mongoose");

// Define the Courses schema
const coursesSchema = new mongoose.Schema({
  courseName: { type: String, required: true },
});

// Export the Courses model
module.exports = mongoose.model("Course", coursesSchema);
