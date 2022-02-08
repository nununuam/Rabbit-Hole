const router = require('express').Router();
ctrl = require("../controllers/videos");

router.post("/upload", ctrl.createdVideo);
router.get("/browse", ctrl.browsing)
router.post("/edit", ctrl.editVideo);
module.exports = router;