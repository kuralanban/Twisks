const db = require("../models");
const User = db.user;

module.exports = {
  unblockUsersMiddleware: async (req, res, next) => {
    try {
      const currentTime = new Date();
      const time=new Date(currentTime.getTime()-7*24*60*60*1000);
      const blockedUsers = await User.find({
        blocked: true,
        blockedAt: { $lte: time },
      });
      await User.updateMany(
        { _id: { $in: blockedUsers.map((user) => user._id) } },
        { blocked: false }
      );
      next();
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
  
};