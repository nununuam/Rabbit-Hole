const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//const users = require("../models/users");

passport.use(new GoogleStrategy({ 
    clientID: process.env.Google_Client_ID, 
    clientSecret: process.env.Google_Client_Secret, 
    callbackURL: process.env.Google_Oauth_Callback, }, 
    function (accessToken, refreshToken, profile, cb) {
        Student.findOne({ googleId: profile.id }, function (err, student) {
            if (err) return cb(err);
            if (student) {
              return cb(null, student);
            } else {
              // we have a new student via OAuth!
              const newStudent = new Student({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id,
              });
              newStudent.save(function (err) {
                if (err) return cb(err);
                return cb(null, newStudent);
              });
            }
          });
        } 
    ) 
);

passport.serializeUser(function(student, done){
    done(null, student.id)
});
passport.deserializeUser(function (id, done) { 
    Student.findById(id, function (err, student) { 
        done(err, student); 
    }); 
});