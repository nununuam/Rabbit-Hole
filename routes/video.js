const router = require('express').Router();
ctrl = require("../controllers/videos");

router.post("/upload", ctrl.createdVideo);

module.exports = router;