const userFollowService = require("../service/userFollow.service");
const db = require("../models");
const User = db.user;
const userService = require("../service/user.service");
module.exports = {
  followUser: async (req, res) => {
    try {
      const following = await userFollowService.updateFollowingUserDetails(
        req,
        res
      );
      const follower = await userFollowService.updateFollowerUserDetails(
        req,
        res
      );
      if (following && follower) {
        return res.status(200).json({
          status: 1,
          message: "Successfully followed the user !",
        });
      }
    } catch (err) {
      return res.status(400).json({
        status: 0,
        message: err.message,
      });
    }
  },
  fetchUserDetails: async (req, res) => {
    try {
      const userId = req.body.searchUser;
      const activeUser = req.body.activeUser;
      const userDetails = await userService.fetchUserDetailservice({
        _id: `${userId}`,
      });
      const following = await User.findOne({
        _id:activeUser,
        following: {
          $elemMatch: {
            id: userId,
          },
        },
      });
      if (userDetails && following == null) {
        res.status(200).json({
          status: 1,
          follow: false,
          message: "Successfully fetched User Profile Details",
          userDetails: userDetails,
        });
      } else if (userDetails && following) {
        res.status(200).json({
          status: 1,
          follow: true,
          message: "Successfully fetched User Profile Details",
          userDetails: userDetails,
        });
      }
    } catch (error) {
      res.status(400).json({
        status: 0,
        message: error.message,
      });
    }
  },
  unfollowUser: async (req, res) => {
    try {
      const following = await userFollowService.deleteFollowingUserDetails(
        req,
        res
      );
      const followers = await userFollowService.deleteFollowerUserDetails(
        req,
        res
      );
      if (following && followers) {
        return res.status(200).json({
          status: 1,
          message: "Successfully unfollowed the user !",
        });
      }
    } catch (err) {
      return res.status(400).json({
        status: 0,
        message: err.message,
      });
    }
  },
  removeFollowerUser: async (req, res) => {
    try {
      const following = await userFollowService.removeFollowingUserDetails(
        req,
        res
      );
      const followers = await userFollowService.removeFollowerUserDetails(
        req,
        res
      );
      if (following && followers) {
        return res.status(200).json({
          status: 1,
          message: "Successfully removed followed the user !",
        });
      }
    } catch (err) {
      return res.status(400).json({
        status: 0,
        message: err.message,
      });
    }
  },
};
