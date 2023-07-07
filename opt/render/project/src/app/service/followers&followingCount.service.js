const { ObjectId } = require("mongodb");
const db = require("../models");
const Post = db.post;
const User = db.user;
var monthFollowers = Number;
module.exports = {fetchFollowersCount: async (userId) => {
    try {
      
      const follow = await User.aggregate([
        { $match: { _id: new ObjectId(userId) } },
        { $unwind: "$followers" },
        {
          $group: {
            _id: { $month: "$followers.createdAt" },
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            month: {
              $let: {
                vars: {
                  monthsInString: [
                    "",
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ],
                },
                in: { $arrayElemAt: ["$$monthsInString", "$_id"] },
              },
            },
            count: 1,
            _id: 0,
          },
        },
        { $sort: { month: 1 } },
      ]);
     
      return follow;
    } catch (error) {
      return error.message;
    }
  },
    fetchUserFollowingCount: async (userId) => {
    try {
      const likes = await User.aggregate([
        { $match: { _id: new ObjectId(userId) } },
        { $unwind: "$following" },
        {
          $group: {
            _id: { $month: "$following.createdAt" },
            count: { $sum: 1 },
          },
        },
        {
          $project: {
            month: {
              $let: {
                vars: {
                  monthsInString: [
                    "",
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ],
                },
                in: { $arrayElemAt: ["$$monthsInString", "$_id"] },
              },
            },
            count: 1,
            _id: 0,
          },
        },
        { $sort: { month: 1 } },
      ]);
      return likes;
    } catch (error) {
      return error.message;
    }
  }

}
