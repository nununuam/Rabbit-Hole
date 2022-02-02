const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({ 
    clientID: process.env.Google_Client_ID, 
    clientSecret: process.env.Google_Client_Secret, 
    callbackURL: process.env.Google_Oauth_Callback, }, 
    function (accessToken, refreshToken, profile, cb) {
        
    }) 
);