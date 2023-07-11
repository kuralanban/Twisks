// const { unblockUsersMiddleware} = require("../middleware/auth.middleware");
// const { mongoose } = require("mongoose");

// const multer = require("multer");


// module.exports = (app) => {
//   const storage = multer.diskStorage({
//       destination: function (req, file, cb) {
//         cb(null, "./public/upload/userPosts");
//       },
//       filename: function (req, file, cb) {
//         cb(null,`${new mongoose.Types.ObjectId()}_${file.originalname}`);
//       },
//     });
   
//     const upload = multer({ storage });
//   // Use `upload` middleware to handle file uploads
//     module.exports = upload;


//   const postController = require("../controller/post.controller");

//   const router = require("express").Router();

//   router.post(
//     "/createPost",
//     upload.single("file"),
//     postController.savePostDetails
//   );
//   router.get("/fetchPosts/:userId", postController.fetchFollowingPosts);

//   router.get("/savedPosts/:userId", postController.fetchAllSavedPosts);

//   router.get("/activeUserPosts/:userId", postController.fetchActiveUserPosts);
//   router.get("/postGotReported", postController.reportedPost);
//   router.get("/blockPost/:id", postController.blockPost);
//   router.get("/hidePost", postController.hidePostGotBlocked);
//   router.delete("/delete/:postId", postController.deletePost);
//   app.use("/post", router);
// };

const { unblockUsersMiddleware } = require("../middleware/auth.middleware");
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

const upload = multer({ storage });

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

module.exports = (app) => {
  const postController = require("../controller/post.controller");
  const router = require("express").Router();

  router.post(
    "/createPost",
    upload.single("file"),
    async (req, res, next) => {
      const fileId = await uploadFile(req.file);
      req.fileId = fileId; // Store the file ID in the request object
      next();
    },
    postController.savePostDetails
  );
  router.get("/fetchPosts/:userId", postController.fetchFollowingPosts);

  router.get("/savedPosts/:userId", postController.fetchAllSavedPosts);

  router.get("/activeUserPosts/:userId", postController.fetchActiveUserPosts);
  router.get("/postGotReported", postController.reportedPost);
  router.get("/blockPost/:id", postController.blockPost);
  router.get("/hidePost", postController.hidePostGotBlocked);
  router.delete("/delete/:postId", postController.deletePost);
  app.use("/post", router);
};
