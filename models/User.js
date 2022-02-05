const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    googleID: String,
    name: String,
    email: String,
    uploadsurl: [String],
},{
    timestamps:true
});
const videoSchema = new mongoose.Schema({
    categories: [String],
    title: String,
    links: String,
    views: {type: Number, min: 0},
},
    {timestamps: true}
);
module.exports = mongoose.model('users', userSchema);
module.exports = mongoose.model('video', videoSchema);