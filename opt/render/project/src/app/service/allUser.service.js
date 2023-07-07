const { blockedMailMiddleware, unblockedMailMiddleware } = require("../middleware/mail.middleware");
const db = require("../models");
const User = db.user;
const Post = db.post;
const allUserService=require("./allUser.service")
module.exports = {
  fetchAllUser: async () => {
    try {
      const allUser = await User.aggregate([
        {
          $project: {
            _id: 1,
            userName: 1,
            profilePhoto: 1,
            followersCount: { $size: "$followers" },
            followingCount: { $size: "$following" },
          },
        },
        {
          $sort: {
            followersCount: -1,
            followingCount: -1,
          },
        },
        {
          $limit: 10,
        },
      ]);
      return allUser;
    } catch (error) {
      return error.message;
    }
  },
  totalUserCount: async () => {
    try {
      const userCount = await User.aggregate([
        { $match: { createdAt: { $ne: null } } },
        { $group: { _id: { $month: "$createdAt" }, totalCount: { $sum: 1 } } },
        { $sort: { _id: 1 } },
        {
          $group: {
            _id: { $month: "$createdAt" },
            cumulativeCounts: { $sum: "$totalCount" },
            monthlyCounts: { $push: { month: "$_id", count: "$totalCount" } },
          },
        },
        { $unwind: "$monthlyCounts" },
        {
          $group: {
            _id: "$monthlyCounts.month",
            cumulativeCounts: { $sum: "$monthlyCounts.count" },
          },
        },

        { $sort: { _id: 1 } },
      ]);
      let i = 0;
      const totalCount = userCount.map((val) => {
        val.cumulativeCounts = val.cumulativeCounts + i;
        i = val.cumulativeCounts;
        return val;
      });
      const fullMonthList = Array.from(Array(13).keys()).slice(1);
      const monthNames = [
        "",
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      const result = fullMonthList.map((month) => {
        const matchingMonth = totalCount.find((item) => item._id === month);
        return {
          _id: month,
          cumulativeCounts: matchingMonth ? matchingMonth.cumulativeCounts : 0,
          month: monthNames[month],
        };
      });
      return result;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return error.message;
    }
  },
  newUserCount: async () => {
    try {
      const newCount = await User.aggregate([
        { $group: { _id: { $month: "$createdAt" }, newCounts: { $sum: 1 } } },
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
            newCounts: 1,
          },
        },
        { $sort: { _id: 1 } },
      ]);
      const fullMonthList = Array.from(Array(13).keys()).slice(1);
      const monthNames = [
        "",
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];
      const result = fullMonthList.map((month) => {
        const matchingMonth = newCount.find((item) => item._id === month);
        return {
          _id: month,
          newCounts: matchingMonth ? matchingMonth.newCounts : 0,
          month: monthNames[month],
        };
      });
      return result;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return error.message;
    }
  },
  activeUserCount: async () => {
    try {
      const activeCount = await User.count({ active: true });
      return activeCount;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return error.message;
    }
  },
  allUser: async () => {
    try {
      const users = await User.find({
        reportsUser: { $exists: true, $not: { $size: 0 } },
      });

      return users;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return error.message;
    }
  },
  blockUser: async (id) => {
    try {
      const userDetails = await User.findOne({ _id: id });
      const block = await User.updateOne(
        { _id: id },
        { $set: { blocked: true, blockedAt: new Date() } }
      );
      blockedMailMiddleware(userDetails);
      return block;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return error.message;
    }
  },

  unblockUser: async (id) => {
    try {
      const userDetails = await User.findOne({ _id: id });
      const unblock = await User.findByIdAndUpdate(id, { blocked: false });
      unblockedMailMiddleware(userDetails)
      return unblock;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return error.message;
    }
  },

  unblockPost: async (id) => {
    try {
      const unblock = await Post.findByIdAndUpdate(id, { blocked: false });
      return unblock;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return error.message;
    }
  },
};
