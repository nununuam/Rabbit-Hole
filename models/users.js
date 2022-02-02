const mongoose = require('mongoose');


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

//module.exports = mongooose.model('users', userSchema);
//module.exports = mongoose.model('video', videoSchema);
module.exports = {'users' : userSchema, 'video' : videoSchema};