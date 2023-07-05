module.exports = (app) => {
  var router = require("express").Router();
  const individualPostController = require("../controller/individualPost.controller");
  const { authenticateAdmin } = require("../middleware/authorize.middleware");

  router.get(
    "/individualPost/:userId",
    individualPostController.fetchUserPost
  );
  router.get(
    "/singlePost/:postId",
    individualPostController.fetchIndividualPost
  ),
    router.put(
      "/updateSinglePost/:postId",
      individualPostController.updateIndividualPost
    );
  app.use("/post", router);
};
