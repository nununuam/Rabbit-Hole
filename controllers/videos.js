const {theUser, theVideo} = require("../models/User");


// create video
const createdVideo = (req, res) =>{
    const object = {
        title: req.body.title,
        categories: req.body.categories.split(" "),
        links: req.body.links,
    }
    console.log('user is', req.user);
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
   res.redirect("/browse",);
}


const browsing = (req, res) =>{
    theVideo.find({}, (err, videos) =>{
        if(err) res.send(err);

        const context = {videos: videos, user: req.user};
        res.render("browse", context);
        //console.log(videos);
        
    })
}



const editVideo = (req, res) =>{
    theVideo.find({}, (err, videos) =>{
        //console.log(req);
        if(err) res.send(err);
        const videosPlaceholder = 
            videos.map(video => ({id: video._id.toString(), title: video.title, links: video.links, categories: video.categories}));
            console.log("videos: ", videosPlaceholder );

        const context = {videos: videosPlaceholder, user: false};
        res.render("edit", context);
    });
}

const destroyVideo = (req, res) =>{
    console.log("hey its hitting it");
    theVideo.findByIdAndDelete(req.params.id, (err, deletedVideo)=>{
        if (err) res.send(err);


        console.log('user is', req.user);
        theUser.findById(req.user, (err, foundUser) =>
        {
            console.log('found user:', foundUser);
            foundUser.video.remove(deletedVideo);
            foundUser.save();
            res.redirect("/browse");
        })
     })
}



 module.exports = {
   createdVideo,
   browsing,
   editVideo,
   destroyVideo

  };
  