const router = require('express').Router();
ctrl = require("../controllers/videos");

router.get("/home", ctrl.home);
router.get("/upload", ctrl.upload);
router.post("/upload", ctrl.createdVideo);
router.get("/browse", ctrl.browsing);
router.get("/edit", ctrl.editing);
router.get("/browse/:id", ctrl.destroyVideo);
router.post("/edit/:id", ctrl.editVideo);
module.exports = router;