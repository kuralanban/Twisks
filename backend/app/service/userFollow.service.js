const db = require("../models");
const User = db.user;
module.exports = {
  updateFollowerUserDetails: async (req, res) => {
    try {
      const activeUser = req.body.activeUser;
      const followUser = req.body.followUser;
      const follower = await User.findByIdAndUpdate(
        { _id: followUser },
        {
          $addToSet: {
            followers: {
              id: activeUser,
            },
          },
        }
      );
      if (follower) {
        return follower;
      }
    } catch (err) {
      return err.message;
    }
  },
  updateFollowingUserDetails: async (req, res) => {
    const activeUser = req.body.activeUser;
    const followUser = req.body.followUser;
    try {
      const following = await User.findByIdAndUpdate(
        { _id: activeUser },
        {
          $addToSet: {
            following: {
              id: followUser,
            },
          },
        }
      );
      if (following) {
        return following;
      }
    } catch (err) {
      return err.message;
    }
  },
  deleteFollowerUserDetails: async (req,res) => {
    try {
      const activeUser = req.body.activeUser;
      const followUser = req.body.followUser;
      const follower = await User.findByIdAndUpdate(
        { _id: followUser },
        {
          $pull: {
            followers: {
              id: activeUser,
            },
          },
        }
      );
      if (follower) {
        return follower;
      }
    } catch (err) {
      return err.message;
    }
  },
  deleteFollowingUserDetails: async (req,res) => {
    try {
      const activeUser = req.body.activeUser;
      const followUser = req.body.followUser;
      const following = await User.findByIdAndUpdate(
        { _id: activeUser },
        {
          $pull: {
            following: {
              id: followUser,
            },
          },
        }
      );
      if (following) {
        return following;
      }
    } catch (err) {
      return err.message;
    }
  },
  removeFollowerUserDetails: async (req,res) => {
    try {
      const activeUser = req.body.activeUser;
      const followUser = req.body.followUser;
      const follower = await User.findByIdAndUpdate(
        { _id: activeUser },
        {
          $pull: {
            followers: {
              id: followUser,
            },
          },
        }
      );
      if (follower) {
        return follower;
      }
    } catch (err) {
      return err.message;
    }
  },
  removeFollowingUserDetails: async (req,res) => {
    try {
      const activeUser = req.body.activeUser;
      const followUser = req.body.followUser;
      const following = await User.findByIdAndUpdate(
        { _id: followUser },
        {
          $pull: {
            following: {
              id: activeUser,
            },
          },
        }
      );
      if (following) {
        return following;
      }
    } catch (err) {
      return err.message;
    }
  },
};
