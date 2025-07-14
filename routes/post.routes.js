const express = require("express");
const { createPost, getAllPosts } = require("../controllers/post.controller");
const protect = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/create", protect, createPost);
router.get("/", getAllPosts);

module.exports = router;
