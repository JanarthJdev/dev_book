const Profile = require("../models/profile.model");

// @desc   Create or update profile
// @route  POST /api/profile
// @access Private
const upsertProfile = async (req, res) => {
  const { bio, location, website, skills, social } = req.body;

  const profileData = {
    user: req.user._id,
    bio,
    location,
    website,
    skills: skills?.split(",").map((skill) => skill.trim()),
    social,
  };

  try {
    let profile = await Profile.findOne({ user: req.user._id });

    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user._id },
        { $set: profileData },
        { new: true }
      );
      return res.json({ message: "Profile updated", profile });
    }

    profile = new Profile(profileData);
    await profile.save();
    return res.status(201).json({ message: "Profile created", profile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// @desc   Get profile by user ID
// @route  GET /api/profile/:userId
// @params userid - path variable
// @access Public
const getProfileByUserId = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.userId }).populate(
      "user",
      ["name", "email"]
    );
    if (!profile) return res.status(404).json({ message: "Profile not found" });

    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

module.exports = {
  upsertProfile,
  getProfileByUserId,
};
