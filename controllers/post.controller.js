const Post = require("../models/post.model");

// @desc Create a post
// @route POST /api/posts
// @access Private
const createPost = async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }

  try {
    const post = await Post.create({
      user: req.user._id,
      content,
    });

    return res.status(201).json({ message: "Post created", post });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// @desc Get all posts
// @route GET /api/posts
// @access Public
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .sort({ createdAt: -1 }) // Newest first
      .populate("user", "name email");

    return res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  createPost,
  getAllPosts,
};
