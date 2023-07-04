const { unblockUsersMiddleware} = require("../middleware/auth.middleware");
const { mongoose } = require("mongoose");

const multer = require("multer");


module.exports = (app) => {
  const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, "./public/upload/userPosts");
      },
      filename: function (req, file, cb) {
        cb(null,`${new mongoose.Types.ObjectId()}_${file.originalname}`);
      },
    });
   
    const upload = multer({ storage });
  // Use `upload` middleware to handle file uploads
    module.exports = upload;


  const postController = require("../controller/post.controller");

  const router = require("express").Router();

  router.post(
    "/createPost",
    upload.single("file"),
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
