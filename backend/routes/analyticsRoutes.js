const express = require("express");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { stats } = require("../controllers/analyticsController");

const router = express.Router();

router.get("/", auth, role("admin"), stats);

module.exports = router;
