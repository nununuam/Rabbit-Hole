const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const { theUser, theVideo} = require("../models/User");

passport.use(new GoogleStrategy({ 
      clientID: process.env.Google_Client_ID, 
      clientSecret: process.env.Google_Client_Secret, 
      callbackURL: process.env.Google_Oauth_Callback, 
    }, 
    function (accessToken, refreshToken, profile, cb) {
      console.log(accessToken, "acess Token", refreshToken)
        theUser.findOne({ googleId: profile.id }, function (err, user) {
            if (err) return cb(err);
            if (user) {
              return cb(null, user);
            } else {
              const newUsers = new theUser({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleID: profile.id,
              });
              newUsers.save(function (err) {
                if (err) return cb(err);
                return cb(null, newUsers);
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
    theUser.findById(id, function (err, user) { 
        done(err, user); 
    }); 
});