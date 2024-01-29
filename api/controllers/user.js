const User = require("../models/User");
const colors = require("colors");
const generateToken = require("../config/generateToken");

/* Register User */
const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.create({ username, password });
    if (user) {
      const token = await generateToken(user._id);
      res.cookie("token", token).json({
        status: 201,
        text: "User has been created.",
        id: user._id,
      });
    }
  } catch (error) {
    if (error.code === 11000) {
      // Duplicate email address
      res.json({
        status: 11000,
        error:
          "An account with this username already exists! Please try another username.",
      });
    } else {
      res.json({ status: 404, error: "Signup failed" });
    }
  }
};

module.exports = { registerUser };
