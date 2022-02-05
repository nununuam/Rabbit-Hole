const Users = require('../models/users');
  
function index(req, res, next) {
  Users.find({}, function(err, users) {
    res.render('home', {
      users,
      user: req.user
    });
  });
}
  
  function addVideo(req, res, next) {
    req.user.video.push(req.body);
    req.user.save(function (err) {
      res.redirect("/home")
    })
  }

  function delVideo(req, res) {

  }

  module.exports = {
    index,
    addVideo,
    delVideo
  };