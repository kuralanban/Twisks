module.exports = (app) => {
  const router = require("express").Router();
  const messageController = require("../controller/message.controller");
  const { authenticateUser } = require("../middleware/authorize.middleware");

  router.get("/searchUser/:accountName",authenticateUser,messageController.fetchMessageAccounts);
  
  router.get("/groups/:accountId",messageController.fetchGroups)
  
  app.use("/message", router);
};
