module.exports = (app) => {
  var router = require("express").Router();
  const countController = require("../controller/followers&followingCount.controller");
  const { authenticateAdmin } = require("../middleware/authorize.middleware");

  router.get(
    "/count/:userId",
    authenticateAdmin,
    countController.fetchFollowerCount
  );
  router.get(
    "/followingCount/:userId",
    authenticateAdmin,
    countController.fetchFollowingCount
  );
  app.use("/post", router);
};
