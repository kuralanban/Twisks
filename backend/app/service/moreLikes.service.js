const { ObjectId } = require("mongodb");
const db = require("../models");
const Post = db.post;
const User = db.user;
var monthFollowers = Number;
module.exports = {
  moreLikes: async () => {
    try {
      // const likes = await Post.aggregate([
      //   { $sort: { likes: -1 } },
      //   { $limit: 4 },
      //   {$project:{ _id:0,username:1,caption:1,fileName:1,likes:1 }}

      // ]);
      const likes = await Post.aggregate([
        {
          $sort: {
            likes: -1,
          },
        },
        { $limit: 4 },
        {
          $lookup: {
            from: "userdetails",
            let: { userIdObj: { $toObjectId: "$userId" } },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: ["$_id", "$$userIdObj"],
                  },
                },
              },
              {
                $project: {
                  profilePhoto: 1,
                  userName: 1,
                  _id: 0,
                },
              },
            ],
            as: "userDetails",
          },
        },
      ]);
      return likes;
    } catch (error) {
      return error.message;
    }
  },
};
