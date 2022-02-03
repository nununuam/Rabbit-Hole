const mongoose = require ('mongoose');
//process.env.Database_URL
mongoose.connect(process.env.Database_URL, { 
  //useNewUrlParser: true,
  //useCreateIndex: true,
  //useUnifiedTopology: true 
});

const db = mongoose.connection;

db.on('connected', function () {
    console.log(`Mongoose connected to:${db.host}:${db.port}`);
  });