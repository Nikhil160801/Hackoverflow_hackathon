const express = require("express");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { create, getAll } = require("../controllers/announcementController");

const router = express.Router();

router.post("/", auth, role("admin"), create);
router.get("/", auth, getAll);

module.exports = router;
