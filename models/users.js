const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    googleID: {String, require: true},
    Name: {
        firstName: String,
        lastName: String
    },
    email: {String, require: true},
    uploadsurl: [String],
},{
    timesamps:true
});

const videoSchema = new mongoose.Schema({
    categories: [String],
    title: {type: String, require: true},
    links: {type: String, require: true},
    views: {type: String, min: 0},
});

module.exports = mongooose.model('users', userSchema);
module.exports = mongoose.model('video', videoSchema);