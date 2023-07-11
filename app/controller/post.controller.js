const postService = require("../service/post.service");

exports.savePostDetails = async (req, res) => {
  try {
    const data = req.body;
    data.fileName = req.file.filename;
    const fileId = req.fileId;

    // Construct the Google Drive file URL
    const fileUrl = `https://drive.google.com/uc?id=${fileId}`;
    data.fileUrl = fileUrl;

    console.log("fileUrl: ", fileUrl);
    console.log("file path :", req.file.path);
    console.log("PostDetails: ", data);

    const postDetails = await postService.saveNewPost(data); // Assuming this function saves the post details
    if (postDetails) {
      return res.status(200).json({
        status: 1,
        message: "Successfully Posted post details!",
        postDetails: postDetails,
      });
    }
  } catch (err) {
    return res.status(400).json({
      status: 0,
      message: err.message,
    });
  }
};

exports.fetchFollowingPosts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const fetchedPosts = await postService.fetchUserFollowingPost(userId);
    return res.status(200).json({
      status: 1,
      message: "Successfully Posted post details!",
      postDetails: postDetails,
    });
  } catch (err) {
    return res.status(400).json({
      status: 0,
      message: err.message,
    });
  }
};

exports.fetchFollowingPosts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const fetchedPosts = await postService.fetchUserFollowingPost(userId);
    console.log("post", fetchedPosts);
    return res.status(200).json({
      status: 1,
      message: "Successfully retived Posts",
      fetchedPosts: fetchedPosts,
    });
  } catch (err) {
    lo;
    return res.status(400).json({
      status: 0,
      message: err.message,
    });
  }
};

exports.fetchAllSavedPosts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const savedPosts = await postService.fetchSavedposts(userId);
    if (savedPosts) {
      return res.status(200).json({
        status: 1,
        message: "Successfully Retrived savedPosts !",
        savedPosts: savedPosts,
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: 0,
      message: err.message,
    });
  }
};
exports.fetchActiveUserPosts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const activeUserPosts = await postService.fetchActiveUserPosts(userId);
    if (activeUserPosts) {
      return res.status(200).json({
        status: 1,
        message: "Successfully Retrived activeUserPosts !",
        activeUserPosts: activeUserPosts,
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: 0,
      message: err.message,
    });
  }
};
exports.reportedPost = async (req, res) => {
  try {
    const postGotReported = await postService.reportedPost();
    return res.status(200).json({
      status: 1,
      message: "Successfully Retrived activeUserPosts !",
      reportedPost: postGotReported,
    });
  } catch (error) {
    return res.status(400).json({
      status: 0,
      message: err.message,
    });
  }
};

exports.blockPost = async (req, res) => {
  const { id } = req.params.id;
  try {
    const blockingPost = await postService.blockPost(req.params.id);
    return res.status(200).json({
      status: 1,
      message: "blocked post",
      blockPost: blockingPost,
    });
  } catch (error) {
    return res.status(400).json({
      status: 0,
      message: error.message,
    });
  }
};

exports.hidePostGotBlocked = async (req, res) => {
  try {
    const hide = await postService.hidePostGotBlock();
    return res.status(200).json({
      status: 1,
      message: "hiding blocked post",
      hidePost: hide,
    });
  } catch (error) {
    return res.status(400).json({
      status: 0,
      message: error.message,
    });
  }
};
exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const deletePost = await postService.deletePost(postId);
    return res.status(200).json({
      status: 1,
      message: "deleted post",
    });
  } catch (error) {
    return res.status(400).json({
      status: 0,
      message: error.message,
    });
  }
};
