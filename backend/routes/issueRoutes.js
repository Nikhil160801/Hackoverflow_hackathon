const express = require("express");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { createIssue, getIssues, updateStatus } = require("../controllers/issueController");

const router = express.Router();

router.post("/", auth, createIssue);
router.get("/", auth, getIssues);
router.put("/:id", auth, role("admin"), updateStatus);

module.exports = router;
