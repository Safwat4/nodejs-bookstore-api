const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const userModel = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    role: { type: String, enum: ['user','admin'], default: 'user', required: false }
}, { timestamps: true });


userModel.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
}
module.exports = mongoose.model('User', userModel);
