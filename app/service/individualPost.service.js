const db = require("../models");
const Post = db.post;
module.exports = {
    fetchUserPost: async (userId) => {
        try {
          const post = await Post.aggregate([
            { $match: { userId } },
            { $sort: { likes: -1 } },
            { $limit: 4},
            {
              $project: {
                _id: 0,
                username: 1,
                caption: 1,
                filePath: 1,
                fileUrl: 1,
                likes: 1,
              },
            },
            { $project: { userId: 0 } },
          ]);
          return post;
        } catch (error) {
          return error.message;
        }
      },
      fetchIndividualPost: async (postId) => {
        try {
          const post = await Post.findOne({_id:postId});
          return post;
        } catch (error) {
          return error.message;
        }
      },
      updateIndividualPost: async (postId,postDetails) => {
        try {
          const post = await Post.findByIdAndUpdate({_id:postId},postDetails);
          return post;
        } catch (error) {
          return error.message;
        }
      }
    }
    