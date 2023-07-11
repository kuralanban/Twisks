const individualPostService=require("../service/individualPost.service")
module.exports = {
    fetchUserPost:async(req,res)=>{
        try{
            const userId=req.params.userId
            const postOfIndividual=await individualPostService.fetchUserPost(userId);
            console.log(postOfIndividual);
            return res.status(200).json({
                status: 1,
                message:"Successfully retrieved Posts" ,
               post:postOfIndividual
               });
        }
        catch(err){
            return res.status(400).json({
                status: 0,
                message:err.message 
               });
        }
    },
    fetchIndividualPost:async(req,res)=>{
        try{
            const postId=req.params.postId
            const postOfIndividual=await individualPostService.fetchIndividualPost(postId);
            return res.status(200).json({
                status: 1,
                message:"Successfully retrieved Posts" ,
               post:postOfIndividual
               });
        }
        catch(err){
            return res.status(400).json({
                status: 0,
                message:err.message 
               });
        }
    },
    updateIndividualPost:async(req,res)=>{
        try{
            const postId=req.params.postId
            const postDetails=req.body
            const postOfIndividual=await individualPostService.updateIndividualPost(postId,postDetails);
            return res.status(200).json({
                status: 1,
                message:"Successfully updated Posts" ,
                post:postOfIndividual
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