const db = require("../models");
const User =db.user
module.exports={
    searchfilter:async(username)=>{
        try{
         const users=await User.find({
         userName:{$regex:`^${username}`,$options:'i'},
         $ne: username
        })
          return users
        }
        catch (error) {
          console.error("Error fetching user details:", error);
          return error.message
      }
      }
}