const { theUser, theVideo} = require("../models/User");
 
 // Rest Routes
/*
 * Index - GET - /authors  - Presentational - respond with all authors
 * New - GET - /authors/new  - Presentational Form - a page with a form to create a new author
 * Show - GET - /authors/:id  - Presentational - respond with specific author by id
 * Create - Post - /authors  - Functional - recieve data from new route to create a author
 * Edit - GET - /authors/:id/edit  - Presentational Form - respond with a form prefilled with author data
 * Update - PUT - /authors/:id  - Functional - recieve data from edit to update a specific author
 * Delete - DELETE - /authors/:id  - Functional - Deletes author by id from request
 */
const idx = (req, res) => {
    theVideo.find({}, (err, foundtheVideo) => {
        if (err) res.send(err);

        const context = { : foundArticles };
        res.render("/browse", context)
    });
};




  module.exports = {
   
  };
  