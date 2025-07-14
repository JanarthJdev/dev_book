const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    bio: {
      type: String,
      maxlength: 300,
    },
    location: {
      type: String,
    },
    website: {
      type: String,
    },
    skills: [String],
    social: {
      github: String,
      linkedin: String,
      twitter: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", profileSchema);
