const { authenticateUser } = require("../middleware/authorize.middleware");

module.exports = (app) => {
  var router = require("express").Router();

  const userFollowController = require("../controller/userFollow.controller");

  router.post("/followUser", authenticateUser, userFollowController.followUser);

  router.post(
    "/fetch",
    authenticateUser,
    userFollowController.fetchUserDetails
  );

  router.post("/unfollow", authenticateUser, userFollowController.unfollowUser);

  router.post(
    "/remove",
    authenticateUser,
    userFollowController.removeFollowerUser
  );

  app.use("/follow", router);
};
