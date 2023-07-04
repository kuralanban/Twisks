const multer = require("multer");
const { mongoose } = require("mongoose");
const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "./public/upload/profile");
  },
  filename: function (req, file, cb) {
    cb(null, `${new mongoose.Types.ObjectId()}_${file.originalname}`);
  },
});
const upload = multer({ storage });
module.exports = (app) => {
  const decode = require("../middleware/decode.middleware.js");

  const authrorize = require("../middleware/authorize.middleware");

  var router = require("express").Router();

  const userController = require("../controller/user.controller.js");

  router.post("/signup", userController.newUser);

  router.post("/google", decode, userController.validateGoogleUser);

  router.post("/validate", userController.validateUser);

  router.get("/findUser/:email", userController.findUserDetails);

  router.get("/userDetails/:userId", userController.fetchUserDetails);

  router.put("/:id", userController.updateUserDetails);

  router.get(
    "/logout/:id",
    authrorize.authenticateUser,
    userController.logoutUser
  );

  router.put("/password/:email", userController.updateUserPassword);

  router.get(
    "/search/:userName",
    authrorize.authenticateUser,
    userController.searchUser
  );

  router.post(
    "/recent",
    authrorize.authenticateUser,
    userController.addRecentUser
  );

  router.post(
    "/recent/clear",
    authrorize.authenticateUser,
    userController.clearRecentUser
  );

  router.post(
    "/uploadImage",
    upload.single("profile"),
    authrorize.authenticateUser,
    userController.uploadProfileImage
  );
  router.get("/details/:userId", userController.individualUserDetail);

  app.use("/user", router);
};
