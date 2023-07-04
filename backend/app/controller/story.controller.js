const { log } = require("console");
const storyService = require("../service/story.service");

module.exports = {
  saveStoryDetails: async (req, res) => {
    // console.log(req.file);
    // console.log(req.body);
    const story = { ...req.file, ...req.body };
    // console.log("your merge request is ",story);
    try {
      const addStory = await storyService.saveNewStory(story, res);
      return addStory;
    } catch (error) {
      return res.status(400).json({
        status: 0,
        message: err.message,
      });
    }
  },
  

  fetchFollowingStory: async (req, res) => {
    try {
      const userId = req.params.userId;
      console.log("the current user ID is ", userId);
      const fetchedStory = await storyService.fetchFollowingStory(userId);
      return res.status(200).json({
        status: 1,
        message: "Successfully retived Story",
        fetchedStory: fetchedStory,
      });
    } catch (err) {
      return res.status(400).json({
        status: 0,
        message: err.message,
      });
    }
  },

  fetchNextFollowingStory: async (req, res) => {
    try {
      const userId = req.params.userId;
      // console.log("the  user ID is ", userId);
      const fetchedStory = await storyService.fetchNextFollowingStory(userId);
      return res.status(200).json({
        status: 1,
        message: "Successfully retived Story",
        fetchedStory: fetchedStory,
      });
    } catch (err) {
      return res.status(400).json({
        status: 0,
        message: err.message,
      });
    }
  },

  //  deleteExpiredStories: async (req, res) => {
  //   try {
  //     await storyService.deleteExpiredStories();
  //     return res.status(200).json({
  //       status: 1,
  //       message: "Expired stories have been deleted.",
  //     });
  //   } catch (error) {
  //     return res.status(400).json({
  //       status: 0,
  //       message: error.message,
  //     });
  //   }
  // },
};
