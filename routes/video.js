const router = require('express').Router();
ctrl = require("../controllers/videos");

router.post("/upload", ctrl.createdVideo);
router.get("/browse", ctrl.browsing)
router.post("/edit", ctrl.editVideo);
router.delete("/edit", ctrl.destroyVideo)
module.exports = router;