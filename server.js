/* ====== External Modules  ====== */
// Required External Modules
// all required code that is not our own
require("dotenv").config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');


/* ====== Instanced Module  ====== */
// Create the Express app
const app = express();
// returns an object that is our server
const routeOauth = require('./routes/user');
const routesVideo = require('./routes/video');
	
/* ====== Middleware  ====== */ 
app.use(express.urlencoded({ extended: true }));  
app.use(session({ secret: "rabbitHole", resave: false, saveUninitialized: true, }) );
app.use(passport.initialize());
app.use(passport.session());
app.use('/public', express.static('public'));
app.use("/", routeOauth);
app.use("/videos", routesVideo);

/* ====== System Variables  ====== */
const PORT = 4000; // full caps signify a config variable

/* ====== App Configuration  ====== */
// app.set
app.set("view engine", "ejs");

app.get('/', (req, res) => {
	console.log('here')
	res.render("home");
});


/* 404 routes*/
app.get((req, res) => {
	res.send("404! error! page not found :(");
});
/* ====== Routes  ====== */
 require("./config/database");
 require("./config/passport");

/* ====== Server bind  ====== */
app.listen(process.env.PORT || 4000, function () {
	console.log(`i'm a little server live on port http://localhost:${PORT}`);
});