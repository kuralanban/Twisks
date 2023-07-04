const jwt = require("jsonwebtoken");

require("dotenv").config();

function authenticateUser(req, res, next) {
  const token = req.headers.authorization;
  const decode = jwt.decode(token);
  if (decode.role == "user") {
    jwt.verify(token, process.env.SECRET_KEY, (err, response) => {
      if (err) {
        res.status(401).send("Unauthorized");
      } else {
        next();
      }
    });
  }
}
function authenticateAdmin(req, res, next) {
  const token = req.headers.authorization;
  const decode = jwt.decode(token);
  if (decode.role == "admin") {
    jwt.verify(token, process.env.SECRET_KEY, (err, response) => {
      if (err) {
        res.status(401).send("Unauthorized");
      } else {
        next();
      }
    });
  } else {
    res.status(401).send("Unauthorized");
  }
}
module.exports = { authenticateUser, authenticateAdmin };
