const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    googleID: String,
    Name: String,
    email: String,
    uploadsurl: [String],
},{
    timesamps:true
});
module.exports = mongooose.model('users', userSchema);