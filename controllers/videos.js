const {theUser, theVideo} = require("../models/User");


const home = (req, res) =>{
    res.render("home");
}
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
   res.redirect("browse");
}

const upload = (req, res) =>{
    res.render("upload", 
	{ user: req.user });
}

const browsing = (req, res) =>{
    theVideo.find({}, (err, videos) =>{
        if(err) res.send(err);

        const context = {videos: videos,  user: req.user};
        res.render("browse", context);  
    })
}


const editVideo = (req, res) =>{
    console.log("yo yo yot");
    theVideo.findById(req.params.id, (err, foundVideo) =>{
        console.log("lol", foundVideo);
        if(err) res.send(err);
        const context = {video: foundVideo,  user: req.user};
        res.render("edit", context);
    })
}
const updateVideo = (req, res) =>{
    console.log("its hitting the update");
    theVideo.findByIdAndUpdate(req.params.id,
        { 
            $set: {
                ...req.body,
            },
        },
        { new: true },
        
        (err, updatedvideo) => {
            if (err) res.send(err);
            
            res.redirect("/videos/browse");
        });
}
   /*
        theVideo.findByIdAndUpdate(req.params.id,
        { 
            $set: {
                ...req.body,
            },
        },
        { new: true },
        
        (err, updatedvideo) => {
            if (err) res.send(err);
            updatedvideo.save();
            res.redirect("/videos/browse");
        });
        */



const destroyVideo = (req, res) =>{
    console.log("hey its hitting it");
    theVideo.findByIdAndDelete(req.params.id, (err, deletedVideo)=>{
        if (err) res.send(err);
        /*
        console.log('user is', user);
        theUser.findById(req.user.id, (err, foundUser) =>
        {
            console.log('found user:', foundUser);
            foundUser.video.remove(deletedVideo);
            foundUser.save();
            res.redirect("/browse");
        })
        */
     })
     res.redirect("/videos/browse");
}



 module.exports = {
   home,
   createdVideo,
   upload,
   browsing,
   editVideo,
   updateVideo,
   destroyVideo
  }