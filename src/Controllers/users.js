const userModel = require('../Schemas/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Registration Controller
exports.register = async function (req, res) {
    try {
        const { username, email, password, phone, role } = req.body;

        // check existing email
        const existingEmail = await userModel.findOne({ email });
        if (existingEmail) return res.status(400).json({ message: "Email already exists" });

        // check existing username
        const existingUser = await userModel.findOne({ username });
        if (existingUser) return res.status(400).json({ message: "Username already exists" });

        // check existing phone
        const existingPhone = await userModel.findOne({ phone });
        if (existingPhone) return res.status(400).json({ message: "Phone already exists" });

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // create new user
        const newUser = new userModel({
            username,
            email,
            phone,
            password: hashedPassword,
            ...(role && { role })
        });

        const saved = await newUser.save();
        
        // remove password from response
        let userObj = saved.toObject();
        delete userObj.password;
        // send response
        res.status(201).json({
            message: "User Registered Successfully",
            user: userObj
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
}; // end of register


// User Login Controller
exports.login = async function (req, res) {
    try {
        const { email, password } = req.body;
        // find user by email
        const user = await userModel.findOne({ email });
        if (!user) return res.status(401).json({ message: "Invalid Email or Password" });
        // compare password
        const match = await user.comparePassword(password);
        if (!match) return res.status(401).json({ message: "Invalid Email or Password" });
        // generate JWT
        const payload = {
            id: user._id,
            username: user.username,
            role: user.role
        };
        // generate token
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({ 
            message: "Login Successful",
            token 
        });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};// end of login
// end of exports