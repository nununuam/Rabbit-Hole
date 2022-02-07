/* ====== External Modules  ====== */
// Required External Modules
// all required code that is not our own
require("dotenv").config();
const express = require('express');
//const req = require("express/lib/request");
const session = require('express-session');
const passport = require('passport');

/* ====== Internal Modules  ====== */
// Required Internal Modules
// all code that is our code


/* ====== Instanced Module  ====== */
// Create the Express app
const app = express();
// returns an object that is our server
const routes = require('./routes/user');
	
/* ====== Middleware  ====== */ 
app.use(express.urlencoded({ extended: true }));  
app.use(session({ secret: "rabbitHole", resave: false, saveUninitialized: true, }) );
app.use(passport.initialize());
app.use(passport.session());
app.use('/public', express.static('public'));
app.use("/", routes);


/* ====== System Variables  ====== */
const PORT = 4000; // full caps signify a config variable

/* ====== App Configuration  ====== */
// app.set
app.set("view engine", "ejs");
app.get('/', (req, res) => {
	console.log('here')
	res.render("home");
});
app.get('/browse', (req, res) => {
	console.log('browse')
	res.render("browse");
});
app.get('/upload', (req, res) => {
	console.log('upload', )
	res.render("upload", 
	{ user: req.user });
});
app.post('/upload', (req, res) => {
	console.log('upload');
	res.render("upload");
	console.log(req.body);
	{ user: req.user };
});
app.get('/login', (req, res) => {
	console.log('login')
	res.render("login");
});
app.get('/home', (req, res) => {
	res.render("home");
	res.render("article", {article: found});

});
app.post('/browse', (req, res) => {
	console.log(req.body)
	res.render("watch");
});
app.post('/browse', (req, res) => {
	res.render("watch")
	console.log("post");
});

/* 404 routes*/
app.get((req, res) => {
	res.send("404! error! page not found :(");
});
/* ====== Routes  ====== */
 require("./config/database");
 require("./config/passport");

/* ====== Server bind  ====== */
// bind the application to the port via app.listen(number, optional function to do after bind)
app.listen(process.env.PORT || 4000, function () {
	console.log(`i'm a little server live on port http://localhost:${PORT}`);
});