const router = require('express').Router();
const passport = require('passport');


router.get( 
    "/auth/google", 
    passport.authenticate("google", { scope: ["profile", "email"] }) 
    );

router.get( 
    "/oauth2callback", 
    passport.authenticate("google", { 
        successRedirect: "/upload", 
        failureRedirect: "/home", }) 
    );

router.get("/logout", 
    function (req, res) { 
        req.logout(); 
        res.redirect("/home"); 
    });

router.get("/login", function (req, res) {
    res.redirect("auth/google"),
    console.log("auth login")
})
router.get("/", function (req, res) 
    { res.render("home", { user: req.user, }); 
}); 


module.exports = router;