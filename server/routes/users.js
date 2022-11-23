const express = require("express");
const verityToken = require("../verifyToken");
const {
  updateUser,
  deleteUser,
  getUser,
  subscribeUser,
  unsubscribeUser,
  likeVideo,
  dislikeVideo,
} = require("../controllers/user");

const router = express.Router();

//update user
router.put("/:id", verityToken, updateUser);

//delete user
router.delete("/:id", verityToken, deleteUser);

//get a user
router.get("/find/:id", getUser);

// //subscribe a user
router.put("/subscribe/:id", verityToken, subscribeUser);

// //unsidscrite a user
router.put("/unsubscribe/:id", verityToken, unsubscribeUser);

// //like a video
// router.put("/like/:videoId", verityToken, likeVideo);

// //dislike a video
// router.put("/dislike/:videoId", verityToken, dislikeVideo);

module.exports = router;
