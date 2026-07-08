/**
 *@module user/services/user.service
 *@description Service layer for User entity
 */

const userRepository = require("../repositories/user.repo");
const {
  hashPassword,
  comparePassword,
} = require("../../../utils/services/hash.service");
const {
  signAccessToken,
  signRefreshToken,
} = require("../../../utils/services/jwt.service");

/**
 *@function createUser
 *@description Create a new user
 *@param {Object} userData - Data for the new user
 */

async function register(userData) {
  try {
    // check existing email
    const existingEmail = await userRepository.findByEmail(userData.email);
    if (existingEmail) throw new Error("Email already exists", 409);
    // check existing username
    const existingUser = await userRepository.findByUsername(userData.username);
    if (existingUser) throw new Error("Username already exists", 409);

    // Hash the password before saving
    const hashedPassword = await hashPassword(userData.password);

    const user = await userRepository.create({
      ...userData,
      password: hashedPassword,
    });
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
} // end of register

/**
 *@function LoginUser
 *@description Login a user
 *@param {Object} loginData - Data for user login
 */

async function login(loginData) {
  try {
    const user = await userRepository.findByEmail(loginData.email);
    if (!user) throw new Error("Invalid Email or Password");

    const match = await comparePassword(loginData.password, user.password);
    if (!match) throw new Error("Invalid Email or Password");

    // Generate JWT tokens
    const accessToken = await signAccessToken({
      id: user.id,
      username: user.username,
      role: user.role,
    });
    const refreshToken = await signRefreshToken({
      id: user.id,
      username: user.username,
      role: user.role,
    });

    return { user, accessToken, refreshToken };
  } catch (error) {
    throw new Error(error.message);
  }
}

// Export service functions
module.exports = {
  register,
  login,
};
