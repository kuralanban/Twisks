module.exports = app => {

  var router = require("express").Router();

  const allUserController=require("../controller/allUser.controller")

  router.get("/allUsers",allUserController.fetchAllUsers);

  router.get("/allCounts",allUserController.userAllCount)

  router.get("/usersForReport",allUserController.allUser);

  router.get("/block/:id",allUserController.blockUser);

  router.get("/unblock/:id",allUserController.unblockUser);

  router.get("/unblockPost/:id",allUserController.unblockPost);

  app.use('/user',router)

}