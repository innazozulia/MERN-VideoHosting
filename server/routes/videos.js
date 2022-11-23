const express = require("express");
const verityToken = require("../verifyToken");
const {
  addVideo,
  addView,
  getByTag,
  getVideo,
  random,
  search,
  sub,
  trend,
} = require("../controllers/video");

const router = express.Router();

//create a video
router.post("/", verityToken, addVideo);
router.put("/:id", verityToken, addVideo);
router.delete("/:id", verityToken, addVideo);
router.get("/find/:id", getVideo);
router.put("/view/:id", addView);
router.get("/trend", trend);
router.get("/random", random);
router.get("/sub", verityToken, sub);
router.get("/tags", getByTag);
router.get("/search", search);

module.exports = router;
