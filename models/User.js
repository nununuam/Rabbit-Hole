const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    googleID: String,
    name: String,
    email: String,
    uploadsurl: [String],
},
    {timestamps:true}
);
const videoSchema = new mongoose.Schema({
    categories: [String],
    //title: String,
    links: String,
    views: {type: Number, min: 0},
},
    {timestamps: true}
);
const theUser = mongoose.model('users', userSchema);
const theVideo = mongoose.model('video', videoSchema);
module.exports = {
    theUser,
    theVideo
}