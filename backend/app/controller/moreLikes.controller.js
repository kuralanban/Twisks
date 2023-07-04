const moreLikesService = require("../service/moreLikes.service");

module.exports = {
  moreLikes: async (req, res) => {
    try {
      const morePost = await moreLikesService.moreLikes();
      return res.status(200).json({
        status: 1,
        message: "Successfully retrieved Posts",
        morePost: morePost,
      });
    } catch (err) {
      return res.status(400).json({
        status: 0,
        message: err.message,
      });
    }
  },
};
