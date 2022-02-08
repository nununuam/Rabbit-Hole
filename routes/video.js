const router = require('express').Router();
ctrl = require("../controllers/videos");

router.post("/upload", ctrl.createdVideo);
router.get("/browse", ctrl.browsing)
module.exports = router;