const LostFound = require("../models/LostFound");

exports.create = async (req, res) => {
  const item = await LostFound.create({
    ...req.body,
    reportedBy: req.user.id
  });
  res.json(item);
};

exports.getAll = async (req, res) => {
  const items = await LostFound.find().sort({ createdAt: -1 });
  res.json(items);
};
