const Announcement = require("../models/Announcement");

exports.create = async (req, res) => {
  const announcement = await Announcement.create(req.body);
  res.json(announcement);
};

exports.getAll = async (req, res) => {
  const announcements = await Announcement.find().sort({ createdAt: -1 });
  res.json(announcements);
};
