const db = require("../models");
const allUserService=require("../service/allUser.service")
exports.fetchAllUsers=async(req,res)=>{
    try{
      const users=await allUserService.fetchAllUser()
      res.status(200).json({
        status:1,
        message:"Successfully fetched User Profile Details",
        allUser:users
      })
    }
    catch(error){
      res.status(400).json({
        status:0,
        message:error.message
      })
    }
    
  };
exports.allUser=async(req,res)=>{
  try{
    const allUsers=await allUserService.allUser()
    res.status(200).json({
      status:1,
      message:"Successfully fetched User Profile Details",
      allUsers:allUsers
    })
   }
   catch(error){
    res.status(400).json({
      status:0,
      message:error.message
    })
  }
  }

  exports.blockUser=async(req,res)=>{
    const {id}=req.params.id
    try{
       const block = await allUserService.blockUser(req.params.id)
       res.status(200).json({
        status: 1,
        message: "Blocked User",
        block: block,
      });
    }
    catch (error) {
      return res.status(400).json({
        status: 0,
        message: error.message,
      });
    }
  }
 
  exports.unblockUser=async(req,res)=>{
    const {id}=req.params.id
    try{
       const unblock = await allUserService.unblockUser(req.params.id)
       res.status(200).json({
        status: 1,
        message: "UnBlocked User",
        unblock: unblock,
      });
    }
    catch (error) {
      return res.status(400).json({
        status: 0,
        message: error.message,
      });
    }
  }

  exports.unblockPost=async(req,res)=>{
    const {id}=req.params.id
    try{
      const unblockingPost=await allUserService.unblockPost(req.params.id)
      return res.status(200).json({
        status: 1,
        message: "Unblocked Post",
        unblockPost:unblockingPost,
      })
    }
    catch(error){
      return res.status(400).json({
          status: 0,
          message:error.message
         });
  }
  }

  exports.userAllCount=async(req,res)=>{
   
    try{
      const totalUserCount=await allUserService.totalUserCount()
      const activeUserCount=await allUserService.activeUserCount()
      const newUserCount=await allUserService.newUserCount()
      const allCounts=[{
        totalUserCount,
        activeUserCount,
        newUserCount
      }]
      return res.status(200).json({
        status: 1,
        message: "Users Count",
        count:allCounts
      })
    }
    catch(error){
      return res.status(400).json({
          status: 0,
          message:error.message
         });
  }
  }