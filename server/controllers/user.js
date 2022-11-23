const createError = require("../error");
const User = require("../models/User");

const updateUser = async (req, res, next) => {
  //compare users
  if (req.params.id === req.user.id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true },
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can update only your account!"));
  }
};

const deleteUser = async (req, res, next) => {
  //compare users
  if (req.params.id === req.user.id) {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (err) {
      next(err);
    }
  } else {
    return next(createError(403, "You can delete only your account!"));
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

const subscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $push: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: 1 },
    });
    res.status(200).json("Subscription successfull.");
  } catch (error) {
    next(error);
  }
};

const unsubscribeUser = async (req, res, next) => {
  try {
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { subscribedUsers: req.params.id },
    });
    await User.findByIdAndUpdate(req.params.id, {
      $inc: { subscribers: -1 },
    });
    res.status(200).json("Unsubscription successfull.");
  } catch (error) {
    next(error);
  }
};

const likeVideo = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

const dislikeVideo = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  subscribeUser,
  unsubscribeUser,
  likeVideo,
  dislikeVideo,
};
