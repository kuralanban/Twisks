const db = require("../models");
const reportedPostService=require("../service/reported.service")
exports.reportedUser=async(req,res)=>{
  try{
    const {userId}=req.params.userId
    const reports=await reportedPostService.reportedUser(req.params.userId);
    res.status(200).json({
      status:1,
      message:"Successfully fetched User Profile Details",
      reports:reports
    })
  }
  catch(error){
    res.status(400).json({
      status:0,
      message:error.message
    })
  }
}
exports.particularReportedPost=async(req,res)=>{
  const {userId}=req.params.userId
  try{
      const reportedPost=await reportedPostService.particularReportedPost(req.params.userId);
      res.status(200).json({
          status:1,
          message:"Successfully fetched User Profile Details",
          particularPost:reportedPost
        })
  }
  catch(error){
      res.status(400).json({
        status:0,
        message:error.message
      })
    }
}
