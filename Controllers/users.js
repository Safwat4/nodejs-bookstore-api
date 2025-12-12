const userModel = require('../Schemas/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// User Registration Controller 
exports.register = async function (req, res) {
    try {
        let newUser = new userModel(req.body);
        // Password Hashing
        const hashedPassword = await bcrypt.hash(newUser.password, 10);
        newUser.password = hashedPassword;
        // Save User
        let createdUser = await newUser.save();
        res.status(201).json({ message: "User Registered Successfully", user: createdUser });

    } catch (error) {
        res.status(400 ).json({ message: "Server Error", error: error.message });
    }
}// end of register

// User Login Controller
exports.login = async function (req, res) {
    try {
        let user = await userModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }
        let passwordcheck = await user.comparePassword(req.body.password);
        if (!passwordcheck) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }
        let token = jwt.sign({ id: user._id, name: user.username , role : user.Role}, 'secretkey', { expiresIn: '1h' });
        res.status(200).json({ message: "Login Successful", token: token });

    } catch (error) {
        res.status(400).json({ message: "Server Error", error: error.message });
    }

}// end of login
