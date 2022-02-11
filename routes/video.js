const router = require('express').Router();
ctrl = require("../controllers/videos");


router.post("/upload", ctrl.createdVideo);
router.get("/browse", ctrl.browsing);
router.get("/edit", ctrl.editVideo);
//router.post("/edit", ctrl.destroyVideo);
router.get("/browse/:id", ctrl.destroyVideo);
module.exports = router;