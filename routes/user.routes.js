const express = require("express");
const { registerUser, loginUser } = require("../controllers/user.controller");
const protect = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/me", protect, (req, res) => {
  res.status(200).json({
    message: "You are authorized!",
    user: req.user,
  });
});

module.exports = router;
