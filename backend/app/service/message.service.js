const db = require("../models");
const User = db.user;
const Message=db.message;
const Groups=db.group;

module.exports={
fetchedMessageAccounts:async (accountName) => {
  try {
    const regex = new RegExp(accountName, 'i');
    const results = await User.find({ userName: { $regex: regex } });
    console.log(results);
    return results;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return error.message;
  }
},

fetchGroups:async(accountId)=>{
  try {
   const groups=await Groups.find({
    members: { $in: [accountId] }
   })
   console.log("Groups :",groups);
   return groups
  } catch (error) {
    console.error("Error fetching user details:", error);
    return error.message;
  }
}
}