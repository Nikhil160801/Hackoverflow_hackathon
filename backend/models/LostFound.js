const mongoose = require("mongoose");

const lostFoundSchema = new mongoose.Schema({
  itemName: String,
  description: String,
  status: { type: String, default: "Lost" },
  reportedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("LostFound", lostFoundSchema);
