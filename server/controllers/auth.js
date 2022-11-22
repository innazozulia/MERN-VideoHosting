const mongoose = require("mongoose");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const createError = require("../error");
const jwt = require("jsonwebtoken");

//signup
const signup = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({ ...req.body, password: hash });

    //save to Mongo
    await newUser.save();
    res.status(200).json("User has been created");
  } catch (error) {
    next(createError(404, "Sorry, not found"));
  }
};

//signin
const signin = async (req, res, next) => {
  try {
    //check user in Mongo DB
    const user = await User.findOne({ name: req.body.name });
    if (!user) return next(createError(404, "User not found!"));

    //check password
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong Credentials"));

    //if success create token
    const token = jwt.sign({ id: user._id }, process.env.JWT);

    // when we return user info we need to change password view
    const { password, ...others } = user._doc;

    //after that create cookie
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(others);
  } catch (error) {
    next(error);
  }
};
const googleAuth = () => {};

module.exports = { googleAuth, signin, signup };
