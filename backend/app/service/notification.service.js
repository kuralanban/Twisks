const db = require("../models");
const Post=db.post;
const Comment=db.comment;
const User=db.user;
const mongoose = require('mongoose');
module.exports = {
    fetchUserNotifications:async(userId)=>{
const result={}

try {
    const userPosts = await Post.aggregate([
        {
            $match:{userId}
        },
        {
          $group: {
            _id: null,
            postIds: { $push: '$_id' }
          }
        },
        {
          $sort: {
            createdAt: -1
          }
        },
      ]).exec();
      const usersPostIds=userPosts[0].postIds
      console.log(usersPostIds);
      const comments = await Comment.find(
        { PostId: { $in: usersPostIds } ,
         commentedBy: { $nin:[userId] } }
        ).sort({createdAt:-1});

      result.comments=comments;

      console.log("UserId :",userId);
      // Like Notification
      const likeNotification={}   
    
        const likedDetails=await Post.aggregate([
          {
            $match:{
              _id:{$in:usersPostIds},
              likedBy: { $nin: [userId] },
            }
          },
          {
            $group:{
              _id: null,
              likedBy: { $push: '$likedBy' },
            }
          },
        ])
        const likeDetails=likedDetails[0];
        console.log(likeDetails.likedBy.flat());
        result.likeNotification=likeDetails.likedBy.flat().reverse();
      // followers
      const followerNotifications=await User.findOne({
        _id:userId
      })
   const followers=followerNotifications.followers.map((a)=>{return a.id})
   console.log('first: ',followers);
      if(followerNotifications && followerNotifications.followers && followerNotifications.followers.length > 0){
        const follower=await User.find({
          _id:{$in: followers}
        }).sort({createdAt:-1})
        console.log("folllower: ",follower);
        result.followerNotification=follower
      }
      else {
        result.followerNotification = [];
      }

      return result;
    }
   catch (error) {
    console.error(error);
    return error 
  }
  
},
}
