const searchFilterService=require("../service/searchFilter.service")

exports.searchfilter=async(req,res)=>{
    try{
      const searchedUser=await searchFilterService.searchfilter(req.params.userValue)
      res.status(200).json({
        status:1,
        message:"Successfully fetched User Profile Details",
       searchedUser:searchedUser
      })
    }
    catch(error){
      res.status(400).json({
        status:0,
        message:error.message
      })
    }
  }
