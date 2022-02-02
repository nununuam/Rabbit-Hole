const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    googleID: String,
    firstName: String,
    lastName: String,
    email: String,
    uploadsurl: [String],
},{
    timesamps:true
});

const videoSchema = new mongoose.Schema({
    categories: [String],
    title: String,
    links: String,
    views: Number,
});