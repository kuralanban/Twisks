const exploreService = require("../service/explore.service");

module.exports = {
  exploreController: async (req, res) => {
    try {
      const userId = req.params.userId;
      console.log("C Explorer user Id",userId);
      const fetchedPosts = await exploreService.exploreService(userId);
      // console.log("C Explorer posts",fetchedPosts);
      return res.status(200).json({
        status: 1,
        message: "Successfully got explore Page",
        fetchedPosts: fetchedPosts,
      });
    } catch (err) {
      return res.status(400).json({
        status: 0,
        message: err.message,
      });
    }
  },
  memoriesController:async(req, res)=>{
    try{

    const userId= req.params.userId;
    console.log("C memories user Id", userId);
    const fetchMemories= await exploreService.memoriesService(userId);
    return res.status(200).json({
      status: 1,
      message:"Successfully got the user Memories",
      fetchMemories: fetchMemories,
    })
    }catch(err){
      return res.status(400).json({
        status: 0,
        message:err.message,
      })

    };


  }

};

//
