const {theUser, theVideo} = require("../models/User");


// create video
const createdVideo = (req, res) =>{
    theVideo.create(req.body, (err, createdVideo) =>{
        console.log(createdVideo);
        if (err) res.send(err);
        theUser.findById(req.user).exec(function (err, foundUser){
            if (err) res.send(err);
            theUser.video.push(createdVideo);
            foundUser.save();
            createdVideo.save();
            console.log(`found user ${foundUser}`);
            console.log(`fcreated video ${createdVideo}`)
    
        })
    })
   res.redirect("/browse");
}
/*
// Index
// grab all of the resource, toss into the ejs for rendering
const idx = (req, res) => {
    theVideo.find({}, (err, foundtheVideo) => {
        if (err) res.send(err);

        const context = { theVideo: foundtheVideo };
        res.render("/browse", context)
    });
};

// new 

const newArticle = (req, res) => {
    // giving the new ejs template access to all authors for article reference
    db.Author.find({}, (err, foundAuthors) => {
        if (err) res.send(err);

        const context = { authors: foundAuthors };
        res.render("articles/new", context)
    });
};
// new 

const newArticle = (req, res) => {
    // giving the new ejs template access to all authors for article reference
    db.Author.find({}, (err, foundAuthors) => {
        if (err) res.send(err);

        const context = { authors: foundAuthors };
        res.render("articles/new", context)
    });
};


const create = (req, res) => {
    theVideo.create(req.body, (err, createdVideo) => {
        if (err) res.send(err);

        console.log("its working");
        // allows us to add videos to the author
       
        theUser.findById(createdVideo.theUser).exec(function (err, foundUser) {
            if (err) res.send(err);
            // update the author articles array
            foundUser.categories.push(createdVideo.category);
            foundUser.links.push(createdVideo.link); // adds article to author
            foundUser.save(); //saving the relationship to the database and commits to memory
            console.log(createdVideo);
            res.redirect("/browse");
        });
        
    }
)};

// show

const show = (req, res) => {
    db.Article.findById(req.params.id)
    // turns ids into the data from their model
        .populate("author")
        // functioning like db.Author.findById()
        // allowing us to reference documents in other collections by automatically replacing the specified path/"field" in the document(s) from other collections
        .exec((err, foundArticle) => {
            if (err) res.send(err);

            const context = { article: foundArticle };

            res.render("articles/show", context)
        });
};

// Edit

const edit = (req, res) => {
    db.Article.findById(req.params.id, (err, foundArticle) => {
        if (err) res.send(err);

        const context = { article: foundArticle }

        res.render("articles/edit", context)
    });
};

//Update

const update = (req, res) => {
    db.Article.findByIdAndUpdate(
        req.params.id,
        { 
            $set: {
                //title: req.body
                //body: req.body
                ...req.body,
            },
        },
        { new: true },
        // callback function AFTER the update has completed
        (err, updatedArticle) => {
            if (err) res.send(err);

            res.redirect(`/articles/${updatedArticle._id}`);
        }
    );
}

// delete

const destroy = (req, res) => {
    db.Article.findByIdAndDelete(req.params.id, (err, deletedArticle) => {
        if (err) res.send(err);

        // we find the author, take the author, remove the article FROM the author and then remove the ID that we put in the array from memory

        db.Author.findById(deletedArticle.author, (err, foundAuthor) => {
            foundAuthor.articles.remove(deletedArticle);
            foundAuthor.save();

            res.redirect("/articles")
        })
    })
}
*/
 module.exports = {
   createdVideo
  };
  