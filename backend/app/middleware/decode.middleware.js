const jwt = require("jsonwebtoken");

function decode(req, res, next) {
  const token = req.body.idToken;
  const decode = jwt.decode(token);
  req.body= decode;
  next();
}

module.exports = decode;
