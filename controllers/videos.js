const {theUser, theVideo} = require("../models/User");


// create video
const createdVideo = (req, res) =>{
    const object = {
        title: req.body.title,
        categories: req.body.categories.split(" "),
        links: req.body.links,
    }
    
    theVideo.create(object, (err, createdVideo) =>{
       // console.log(createdVideo);
        //console.log(`thgfggh ${theUser}`);
        if (err) res.send(err);
        theUser.findById(req.user).exec(function (err, foundUser){
            if (err) res.send(err);
            foundUser.video.push(createdVideo);
            foundUser.save();
            createdVideo.save();
           // console.log(`found user ${foundUser}`);
            //console.log(`fcreated video ${createdVideo}`)
        })
    })
   res.redirect("/browse");
}


const browsing = (req, res) =>{
    theVideo.find({}, (err, videos) =>{
        if(err) res.send(err);

        const context = {videos: videos, user: false};
        res.render("browse", context);
        console.log(videos);
    })
}

const show = (req, res) => {
    theUser.findById(req.params.id)
    // turns ids into the data from their model
        //.populate("author")
        // functioning like db.Author.findById()
        // allowing us to reference documents in other collections by automatically replacing the specified path/"field" in the document(s) from other collections
        .exec((err, foundArticle) => {
            if (err) res.send(err);

            const context = { videos: foundArticle };

            res.render("browse/show", context)
        });
};

const editVideo = (req, res) =>{
    theVideo.find({}, (err, videos) =>{
        console.log(req);
        if(err) res.send(err);
        const videosPlaceholder = 
            videos.map(video => ({id: video._id.toString(), title: video.title, links: video.links, categories: video.categories}));
            console.log("videos: ", videosPlaceholder );

        const context = {videos: videosPlaceholder, user: false};
        res.render("edit", context);
    });
}

const destroyVideo = (req, res) =>{
    const key = {
        title: req.body.title,
        links: req.body.links,
    }
    console.log("callsed destory", req.body)
    theVideo.findOne(key, (err, foundVideo) =>{
        if(err) res.send(err);
        res.redirect("/edit")
    });
}
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


 module.exports = {
   createdVideo,
   browsing,
   editVideo,
   destroyVideo
  };
  