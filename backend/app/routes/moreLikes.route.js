module.exports = (app) => {
  var router = require("express").Router();
  const moreLikesController = require("../controller/moreLikes.controller");
  const { authenticateAdmin } = require("../middleware/authorize.middleware");

  router.get("/popularPost", authenticateAdmin, moreLikesController.moreLikes);

  app.use("/post", router);
};
