const users = require('../models/users');
  
function index(req, res, next) {
  Student.find({}, function(err, users) {
    res.render('home', {
      users,
      user: req.user
    });
  });
}
  
  function addVideo(req, res, next) {
    
  }

  function delVideo(req, res) {
    
  }