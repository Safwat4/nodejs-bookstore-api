const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    try {
        const fulltoken = req.headers.authorization;
        const token = fulltoken?.split(" ")[1];
        if (!token) return res.status(400).json({ message: 'Access Denied' });
        const decoded = jwt.verify(token, 'secretkey');
        req.user = decoded;
        next();
        
    } catch (error) {
        return res.status(400).json({ message: 'Invalid Token' });
    }
}
