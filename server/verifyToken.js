const jwt = require("jsonwebtoken");
const createError = require("./error");

const verityToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(createError(401, "You are not authenticated!"));

  //verify token
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid!"));

    //if all ok
    req.user = user;
    next();
  });
};

module.exports = verityToken;
