const { log } = require("console");
const followersFollowingCountService = require("../service/followers&followingCount.service");

module.exports = {fetchFollowerCount:async(req,res)=>{
    try{
        const userId=req.params.userId
        const getFollowersCount=await followersFollowingCountService.fetchFollowersCount(userId);
        return res.status(200).json({
            status: 1,
            message:"Successfully retrieved Posts" ,
            getFollowersCount:getFollowersCount
           });
    }
    catch(err){
        return res.status(400).json({
            status: 0,
            message:err.message 
           });
    }
},

    fetchFollowingCount:async(req,res)=>{
    try{
        const userId=req.params.userId
        const getFollowingCount=await followersFollowingCountService.fetchUserFollowingCount(userId);
        return res.status(200).json({
            status: 1,
            message:"Successfully retrieved Posts" ,
            getFollowingCount:getFollowingCount
           });
    }
    catch(err){
        return res.status(400).json({
            status: 0,
            message:err.message 
           });
    }
}
}
