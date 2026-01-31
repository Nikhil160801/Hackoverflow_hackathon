const Issue = require("../models/Issue");

exports.stats = async (req, res) => {
  const total = await Issue.countDocuments();
  const resolved = await Issue.countDocuments({ status: "Resolved" });
  const pending = await Issue.countDocuments({ status: "Pending" });

  res.json({ total, resolved, pending });
};
