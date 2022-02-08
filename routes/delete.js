const router = require('express').Router();
router.delete("/browse")

const deleteVideo = (req, res) => {
    res.redirect("/upload")
}

module.exports = {
    delete: deleteVideo,
}