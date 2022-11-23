const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const videoRoute = require("./routes/videos");
const commentRoute = require("./routes/comments");
const cookieParser = require("cookie-parser");

const app = express();

//.env config
dotenv.config();

//connect to DB
const connect = () => {
  mongoose
    .connect(process.env.MONGO)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      throw err;
    });
};

//cookieParser
app.use(cookieParser());

//JSON
app.use(express.json());

//Router
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/videos", videoRoute);
app.use("/api/comment", commentRoute);

//midleware
app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong ...";
  return res.status(status).json({
    success: false,
    status: status,
    message: message,
  });
});

app.listen(8800, () => {
  connect();
  console.log("Connected to server");
});
