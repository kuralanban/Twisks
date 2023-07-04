const exploreController = require("../controller/explore.controller");
const router = require("express").Router();
const { authenticateUser } = require("../middleware/authorize.middleware");

module.exports = (app) => {
  router.get("/:userId", authenticateUser,exploreController.exploreController);

  router.get("/viewMemories/:userId", authenticateUser,exploreController.memoriesController);

  app.use("/explore", router);
};
