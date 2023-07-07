module.exports = (app) => {
  var router = require("express").Router();
  const searchFilterController = require("../controller/searchFilter.controller");

  router.post("/search/:userValue", searchFilterController.searchfilter);

  app.use("/user", router);
};
