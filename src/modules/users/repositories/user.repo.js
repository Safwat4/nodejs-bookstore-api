/** 
 *@module user/repositories/user.repository
 *@description Repository layer for User entity
 */
const User = require('../models/user.model');

/** Create a new user in the database
 * @param {Object} userData - Data for the new user
 * @returns {Promise<User>} - Created user document
 * @throws {Error} - If creation fails (e.g., duplicate email)
 */

async function create(userData) {
    const user = await User.create(userData);
    return user;
};

/** Find a user by username
 * @param {string} username - User's username
 * @returns {Promise<User|null>} - Found user document or null if not found
 */
async function findByUsername(username) {
    const user = await User.findOne({ username: username }).select('+password');
    return user;
};

/** Find a user by email
 * @param {string} email - User's email
 * @returns {Promise<User|null>} - Found user document or null if not found
 */
async function findByEmail(email) {
    const user = await User.findOne({ email: email }).select('+password');
    return user;
};

/**    
   * Update a user by username
   * @param {string} username - User's username
   * @param {Object} updateData - Data to update
   * @returns {Promise<User|null>} - Updated user document or null if not found        
*/

async function updateByUsername(username, updateData) {
    const user = await User.findOne({ username: username }).select('+password');
    if (user) {
        Object.assign(user, updateData);
        return await user.save();
    }
    return null;
};

/** Delete a user by username
 * @param {string} username - User's username
 * @returns {Promise<User|null>} - Deleted user document or null if not found
 */
async function deleteByUsername(username) {

    return await User.findByIdAndDelete(username);
};

// Export repository functions
module.exports = {
    create,
    findByUsername,
    findByEmail,
    updateByUsername,
    deleteByUsername,
};