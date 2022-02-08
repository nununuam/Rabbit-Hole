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
        console.log(`thgfggh ${theUser}`);
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

const editVideo = (req, res) =>{
   
}

const destroyVideo = (req, res) =>{
   
}

 module.exports = {
   createdVideo,
   browsing,
   editVideo,
   destroyVideo
  };
  