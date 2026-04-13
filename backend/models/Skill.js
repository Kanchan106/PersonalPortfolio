const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, enum: ["Beginner", "Intermediate", "Advanced"], default: "Beginner" }
});

module.exports = mongoose.model("Skill", skillSchema);