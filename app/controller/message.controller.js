const messageService=require("../service/message.service")

module.exports={
    fetchMessageAccounts:async(req,res)=>{
    try{
      const accountName=req.params.accountName; 

      const fetchedMessageAccounts=await messageService.fetchedMessageAccounts(accountName);

      if(fetchedMessageAccounts){
        res.status(200).json({
          status:1,
          message:"Successfully User Notification Details",
          fetchedMessageAccounts:fetchedMessageAccounts,
        })
      }
    }
    catch(error){
      res.status(400).json({
        status:0,
        message:error.message
      })
    }
  },

  fetchGroups:async(req,res)=>{
    try{
      const accountId=req.params.accountId; 

      const groups=await messageService.fetchGroups(accountId);

      if(groups){
        res.status(200).json({
          status:1,
          message:"Successfully fetched groups",
          groups:groups,
        })
      }
    }
    catch(error){
      res.status(400).json({ 
        status:0,
        message:error.message
      })
    }
  }
}