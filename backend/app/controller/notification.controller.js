const notificationService=require("../service/notification.service")

exports.fetchUserNotification=async(req,res)=>{
    try{
      const userId=req.params.userId; 

      const userNotification=await notificationService.fetchUserNotifications(userId);
      console.log("noti :",userNotification);
      if(userNotification){
        res.status(200).json({
          status:1,
          message:"Successfully User Notification Details",
          userNotification:userNotification,
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
  