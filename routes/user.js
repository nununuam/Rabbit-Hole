const router = require('express').Router();
const passport = require('passport');

/*
router.get("/login", function (req, res) {
    res.redirect("oauth/google"),
    console.log("oauth login")
})
router.get("/", function (req, res) 
    { res.render("home", { user: req.user, }); 
}); 

router.get("/", function (req, res) {
    res.render('index', {
        user: req.user
    });
});
*/

router.get("/login", function (req, res) {
    res.redirect("oauth/google");
    console.log("oauth login");
})

module.exports = router;