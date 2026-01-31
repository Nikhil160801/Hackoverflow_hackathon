const Issue = require("../models/Issue");

exports.createIssue = async (req, res) => {
  const issue = await Issue.create({
    ...req.body,
    createdBy: req.user.id
  });
  res.json(issue);
};

exports.getIssues = async (req, res) => {
  const issues = await Issue.find().populate("createdBy", "name email");
  res.json(issues);
};

exports.updateStatus = async (req, res) => {
  const updated = await Issue.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};
