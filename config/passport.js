const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const users = require("../models/User");
const videos = require("../models/videos");

passport.use(new GoogleStrategy({ 
      clientID: process.env.Google_Client_ID, 
      clientSecret: process.env.Google_Client_Secret, 
      callbackURL: process.env.Google_Oauth_Callback, 
    }, 
    function (accessToken, refreshToken, profile, cb) {
        users.findOne({ googleId: profile.id }, function (err, user) {
            if (err) return cb(err);
            if (user) {
              return cb(null, user);
            } else {
              // we have a new student via OAuth!
              const newusers = new users({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
              });
              newusers.save(function (err) {
                if (err) return cb(err);
                return cb(null, newStudent);
              });
            }
          });
        } 
    ) 
);

passport.serializeUser(function(user, done){
    done(null, user.id)
});
passport.deserializeUser(function (id, done) { 
    Student.findById(id, function (err, user) { 
        done(err, user); 
    }); 
});