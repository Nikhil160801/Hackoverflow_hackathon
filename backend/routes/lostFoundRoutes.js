const express = require("express");
const auth = require("../middleware/authMiddleware");
const { create, getAll } = require("../controllers/lostFoundController");

const router = express.Router();

router.post("/", auth, create);
router.get("/", auth, getAll);

module.exports = router;
