const db = require("../models");
const Post = db.post;
const User = db.user;
const { ObjectId } = require("mongodb");
module.exports = {
   
    reportedUser:async(userId)=>{
        try{
          const report=await User.find({'_id':new ObjectId(userId)})
          console.log(report);
          return report
        }
        catch (error) {
            console.error("Error fetching user details:", error);
            return error.message
        }
    },
    particularReportedPost:async(userId)=>{
        try{
            const reportedPost=await Post.find({'_id':new ObjectId(userId)})
            return reportedPost
          }
          catch (error) {
              console.error("Error fetching user details:", error);
              return error.message
          }
    }
    
}