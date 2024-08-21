const express = require("express");
const movieController = require("../controller/movies");
const router = express.Router();

router.get("/trending", movieController.trending);
router.get("/top-rate", movieController.topRate);
router.get("/discover", movieController.discover);
router.post("/video", movieController.postVideo);
router.post("/search", movieController.postSearch);

module.exports = router;
