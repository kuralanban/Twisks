const db = require("../models");
const Story = db.story;
const User = db.user;

module.exports = {
  saveNewStory: async (storyDetail, res) => {
    const existedStory= await Story.findOne({userId:storyDetail.userId})
    if(!existedStory){
      const story= new Story({
        file:[
          {
            filename:storyDetail.filename
          }
        ],
        userId:storyDetail.userId,
        username:storyDetail.username,
      })
      story.save(story).then((data)=>{
        res.send(data)
        const twentyFourHoursAgo = new Date();
        const currentDate=twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() );
      })
      .catch((err) => {
        return err.message;
      });
    }
    else{
      try{
        const addToExistedStory= await Story.findByIdAndUpdate(existedStory._id,
          {
          $addToSet: {
            file:{
              filename:storyDetail.filename,
            }
          },
        }, { useFindAndModify: false },
        )
        const twentyFourHoursAgo = new Date();
         const currentDate=twentyFourHoursAgo.setHours(twentyFourHoursAgo.getHours() );
      }
    catch(error){
      return error.message
    }
  }
  },
  fetchFollowingStory: async (userId) => {
    try {
      const user = await User.findOne({ _id: userId });
      const followingPersonId = user.following.map((element)=>{
        return element.id
      });

      const fetchedStory = await Story.find({ userId: { $in: followingPersonId } }).sort({updatedAt:-1})
      console.log("Your fetched story is ", fetchedStory);
     //agg
      const fetchedStories= await Story.aggregate([
        {$match:{ userId:{ $in: followingPersonId}}},
        {$project:{updatedAt:1}}
      ])
      console.log(fetchedStories);
    //agg2
     const answer= await Story.aggregate([
      {$match:{createdAt:{$lt:new Date(new Date().getTime()-24*60*60*1000)}}},
      {$project:{userId:1}}
     ])
     console.log(answer,"Story which have more that 24 hrs");
     //delete
     const deletedStory= await Story.deleteMany({
      _id:{$in:answer.map((doc)=>doc._id) }
     })
      if (fetchedStory) {
        return fetchedStory;
      }
    } catch (error) {
      return error.message;
    }
  },
};
