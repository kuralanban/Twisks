const { Long } = require("mongodb");
const db = require("../models");
const Post = db.post;
const User = db.user;


module.exports = {
  // exploreService: async (userId) => {
  //   console.log("S explorer userId",userId);
  //   try {
  //      const post = await Post.find({ userId : userId});
  //     console.log("S explorer post",post);
  //     return post;
  //   } catch (error) {
  //     return error.message;
  //   }
  // },
  exploreService: async (userId)=>{
    console.log("explore",userId);
    try{
    const allStory = await Post.find({});
  
    const publicAccounts= await User.find({$and:[{accountType:"public"}]},{_id:1});
    
   

    const publicAccountId=publicAccounts.map((element)=>{
    return element._id.toString();
  })
  //  const publicAccountPosts=await Post.find({userId:{$in:publicAccountId}});
   const publicAccountPosts = await Post.aggregate([
    {
      $match: {
        userId:{$in:publicAccountId}
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
   const hideBlockedPost=publicAccountPosts.filter((ans)=>{
    if(ans.blocked === false){
      return ans
    }
  })
    return hideBlockedPost;
    }catch(error){
   return error.message;
  }
  },

  memoriesService: async(userId)=>{
    console.log("Memories service",userId);
    try{

const today = new Date();
const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate()+1);
console.log(oneYearAgo, "one year ago");

const userPost=await Post.find({
    userId: userId,
  // createdAt: {
  //   $gte: oneYearAgo,
  //   $lt: today
  // },
  createdAt: {  $gte: new Date(today.getFullYear() - 1, today.getMonth(), today.getDate()),
                $lt: new Date(today.getFullYear() - 1, today.getMonth(), today.getDate()+1)
             }}).limit(2)

console.log("Memories of particular user post of one year old", userPost);
return userPost;

    }catch(error){
      return error.message;
    }

  }

}
