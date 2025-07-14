const express = require("express");
const {
  upsertProfile,
  getProfileByUserId,
} = require("../controllers/profile.controller");
const protect = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", protect, upsertProfile);
router.get("/getprofile/:userId", getProfileByUserId);

module.exports = router;
