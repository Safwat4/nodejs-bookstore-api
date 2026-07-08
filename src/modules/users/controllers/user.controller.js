const userService = require("../services/user.servise");
const asyncHandler = require("express-async-handler");

/**
 * @function registerUser
 * @description Register a new user
 * @param {Object} req - Express request object
 */

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { username, email, password, phone, role } = req.body;
    const user = await userService.register({
      username,
      email,
      password,
      phone,
      role,
    });
    res.status(201).json({
      message: "User Registered Successfully",
      user: {
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

/**
 * @function loginUser
 * @description Login a user
 * @param {Object} req - Express request object
 */
const loginUser = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.login({
      email,
      password,
    });
    res.status(200).json({
      message: "User Logged In Successfully",
      user: {
        username: user.user.username,
        email: user.user.email,
        accessToken: user.accessToken,
        refreshToken: user.refreshToken,
      },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = {
  registerUser,
  loginUser,
};
