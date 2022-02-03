const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new mongoose.Schema({
    categories: [String],
    title: String,
    links: String,
    views: {type: Number, min: 0},
},
    {timesamps: true}
);


module.exports = mongoose.model('video', videoSchema);

