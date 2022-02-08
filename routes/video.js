const router = require('express').Router();
ctrl = require("../controllers/videos");

router.post("/upload", ctrl.users.createdVideo);

module.exports = router;