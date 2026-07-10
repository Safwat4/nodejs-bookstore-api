const jwt = require("../utils/services/jwt.service")


module.exports = (req, res, next) => {
    try {
        // Get token from Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({ message: 'Authorization header missing' });
        }
        // Extract token
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: 'Token missing' });
        }
        // Verify token
        const decoded = jwt.verifyAccessToken(token);
        req.user = decoded;

        next();

    } catch (error) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};

