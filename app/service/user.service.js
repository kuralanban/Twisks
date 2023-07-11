const db = require("../models");
const User = db.user;
const allUserService=require("./allUser.service")
module.exports = {
  fetchUserDetailservice: async (userId) => {
    try {
      const userDetails = await User.findOne(userId);
      return userDetails;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return error.message;
    }
  },
  searchUser: async (userName) => {
    try {

      const user = await User.find({
        userName: { $regex: `^${userName}`, $options: "i" },
      });
      return user;
    } catch (error) {
      console.error("Error fetching user details:", error);
      return error.message;
    }
  },
  updateRecentSearchedUser: async (userId, data) => {
    try {
      const maxLimit = 10;
      const details = {
        id: data,
      };
      const updateUser = await User.findByIdAndUpdate(
        userId,
        {
          $push: {
            recentSearchedUser: {
              $each: [details],
              $slice: -maxLimit,
            },
          },
        },
        {
          useFindAndModify: false,
          new: true,
        }
      );
      return updateUser;
    } catch (err) {
      return err.message;
    }
  },
  clearRecentSearchedUser: async (userId) => {
    try {
      const updateUser=await User.updateOne({_id:userId},{
        $unset:{"recentSearchedUser":1}
      })
      return updateUser;
    } catch (err) {
      return err.message
    }
  },
  uploadProfileImage: async (data, res) => {
    try {
      const profileUpload = await User.findByIdAndUpdate(
       {_id:data.userId},
        {
          $set: {
            profilePhoto: data.fileUrl,
          },
        },
        {
          new: true,
        }
      )
      return profileUpload
    } catch (err) {

    }
  },
  individualUserDetail:async(userId)=>{
    try{
      const details=await User.findOne(userId,{userName:1,accountType:1,profilePhoto:1});
      return details;
    }
    catch (error) {
      console.error("Error fetching user details:", error);
      return error.message
  }
  },
  userActivityStatus:async(userId)=>{
    try{
      const user = await User.findById(userId);
      const details=await User.findByIdAndUpdate( {_id:userId},
        {
          $set: {
            active:!user.active,
          }
        },
        { new: true } 
      )
      return details;
    }
    catch (error) {
      console.error("Error fetching user details:", error);
      return error.message
  }
  },
}




