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
const videoSchema = new mongoose.Schema({
    categories: [String],
    title: String,
    links: String,
    views: {type: Number, min: 0},
},
    {timesamps: true}
);
module.exports = mongoose.model('users', userSchema);
module.exports = mongoose.model('video', videoSchema);