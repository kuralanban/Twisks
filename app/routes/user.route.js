const multer = require("multer");
const { google } = require('googleapis');
const CLIENT_ID = "20294953218-3pvfpdapvflrqs3andlbkok0ei8u97no.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN = "1//04HOdok0L_WfXCgYIARAAGAQSNwF-L9IrYAlOVpwKVTyyDWOeHng2oevjSme7BFMBsDQ8mKpaVrHPGrNpn1q7p1ot-xFieJfWPd4";
const fs = require('fs');
const { mongoose } = require("mongoose");
const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
const drive = google.drive({
  version: 'v3',
  auth: oauth2Client
});

const storage = multer.diskStorage({

  filename: function (req, file, cb) {
    cb(null, `${new mongoose.Types.ObjectId()}_${file.originalname}`);
  },
});

async function uploadFile(file) {
  try {
    const response = await drive.files.create({
      requestBody: {
        name: file.filename,
        mimeType: 'image/jpg'
      },
      media: {
        mimeType: 'image/jpg',
        body: fs.createReadStream(file.path),
      }
    });

    const fileId = response.data.id;
    return fileId;
  } catch (error) {
    console.log(error.message);
    return null;
  }
}

const upload = multer({ storage });
module.exports = (app) => {
  const decode = require("../middleware/decode.middleware.js");

  const authrorize = require("../middleware/authorize.middleware.js");

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
    async (req, res, next) => {
      const fileId = await uploadFile(req.file);
      req.fileId = fileId; // Store the file ID in the request object
      next();
    },
    authrorize.authenticateUser,
    userController.uploadProfileImage
  );
  router.get("/details/:userId", userController.individualUserDetail);

  app.use("/user", router);
};
