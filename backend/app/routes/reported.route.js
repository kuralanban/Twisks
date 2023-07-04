module.exports = (app) => {
  var router = require("express").Router();
  const reportedPostController = require("../controller/reported.controller");
  router.get(
    "/reportedUser/:userId",
    reportedPostController.reportedUser
  );
  router.get(
    "/particularReportedPost/:userId",
    reportedPostController.particularReportedPost
  );
  app.use("/reports", router);
};
