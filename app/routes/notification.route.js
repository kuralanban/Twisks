module.exports = (app) => {
  var router = require("express").Router();
  const notiController = require("../controller/notification.controller");

  const { authenticateUser } = require("../middleware/authorize.middleware");
  router.get(
    "/:userId",
    authenticateUser,
    notiController.fetchUserNotification
  );

  app.use("/notifications", router);
};
