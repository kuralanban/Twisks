
const db = require("../models");
const Post = db.post;
const User = db.user;
const mongoose = require('mongoose');
module.exports = {
  saveNewPost: async (postDetail, file) => {
    try {
      const savePostDetails = await Post.create(postDetail);
      if (savePostDetails) {
        return savePostDetails;
      }
    } catch (error) {
      return error.message;
    }
  },

  fetchUserFollowingPost: async (userId) => {
    try {
      const user = await User.findOne({ _id: userId });

      const followingIds=user.following.map((a)=>{return a.id.toString()})

      const fetchedPosts = await Post.aggregate([
        {
          $match: {
            userId: { $in:followingIds }
          }
        },
        {
          $sort: {
            createdAt: -1
          }
        },
        {
          $lookup: {
            from: "userdetails",
            let: { userIdObj: { $toObjectId: "$userId" } },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: [ "$_id", "$$userIdObj" ]
                  }
                }
              },
              {
                $project: {
                  profilePhoto: 1,
                  userName: 1,
                  _id: 0
                }
              }
            ],
            as: "userDetails"
          }
        }
      ]);
      const hideBlockedPost=fetchedPosts.filter((ans)=>{
        if(ans.blocked === false){
          return ans
        }
      })
      
      if(hideBlockedPost){
        return hideBlockedPost
      }
     
    } catch (error) {
      return error.message;
    }
  },
  fetchSavedposts: async (userId) => {
    try {
      const savedPosts = await Post.aggregate([
        {
          $match: {
            savedBy: userId
          }
        },
        {
          $sort: {
            createdAt: -1
          }
        },
        {
          $lookup: {
            from: "userdetails",
            let: { userIdObj: { $toObjectId: "$userId" } },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: [ "$_id", "$$userIdObj" ]
                  }
                }
              },
              {
                $project: {
                  profilePhoto: 1,
                  userName: 1,
                  _id: 0
                }
              }
            ],
            as: "userDetails"
          }
        }
      ]);
      if (savedPosts) {
        return savedPosts;
      }
    } catch (error) {
      return error.message;
    }
  },
  fetchActiveUserPosts: async (userId) => {
    try {
      const activeUserPosts = await Post.aggregate([
        {
          $match: {
            userId: userId
          }
        },
        {
          $sort: {
            createdAt: -1
          }
        },
        {
          $lookup: {
            from: "userdetails",
            let: { userIdObj: { $toObjectId: "$userId" } },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $eq: [ "$_id", "$$userIdObj" ]
                  }
                }
              },
              {
                $project: {
                  profilePhoto: 1,
                  userName: 1,
                  _id: 0
                }
              }
            ],
            as: "userDetails"
          }
        }
      ]);
      const hideBlockedPost=activeUserPosts.filter((ans)=>{
        if(ans.blocked === false){
          return ans
        }
      })
      if (hideBlockedPost) {
        return hideBlockedPost;
      }
    } catch (error) {
      return error.message;
    }
  },
  reportedPost:async()=>{
    try{
        const reported=await Post.find({ reports: { $exists: true, $not: { $size: 0 } } })
        return reported
     }
     catch (error) {
         console.error("Error fetching user details:", error);
         return error.message
     }
},
blockPost:async(id)=>{
  try {
    const block = await Post.updateOne(
      { _id: id },
      { $set: { blocked:true, blockedAt:new Date()}})
    return block
  } catch (error) {
    console.error("Error fetching user details:", error);
    return error.message;
  }
},
hidePostGotBlock:async()=>{
  try{
    const hide= await Post.find({
      $or: [
        { blocked: { $exists: false } },
        { blocked: { $eq: false } },
        { blockedAt: { $exists: false } },
        { blockedAt: { $eq: null } }
      ]
    })
    return hide
  }
  catch (error) {
    console.error("Error fetching user details:", error);
    return error.message;
  }
},
deletePost:async(postId)=>{
  try{
    const deletePost= await Post.deleteOne({_id:postId})
    return deletePost
  }
  catch (error) {
    console.error("Error deleting post details:", error);
    return error.message;
  }
}

};