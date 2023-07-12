const db = require("../models/index");
const postModel = db.post;
const commentModel = db.comment;
const userModel = db.user;
const likeModel = db.likes;

module.exports = (io) => {
  io.on("connection", (socket) => {
    // console.log("user connected!");

    socket.on('join',async(_id)=>{
      try{
        const socketId = await userModel.findByIdAndUpdate(
          _id ,
          {userSocketId:socket.id},
        );
      }
      catch(error){
        socket.emit('error',`${error.message}`);
      }
    })
  socket.on("likedPost", async (data) => {
console.log("like ulla vantan");
  try {
    const post = await postModel.findOne({ _id: data.postId });

    // Check if the user has already liked the post
    const likedUserIndex = post.likedBy.findIndex((likedUser) =>{
    return likedUser.userId === data.userId;
    })
    console.log(likedUserIndex);
    if (likedUserIndex > -1) {
      // User has already liked the post, so unlike it
      await postModel.updateOne(
        { _id: data.postId },
        {
          $inc: { likes: -1 },
          $pull: {
            likedBy: { userId: data.userId },
          },
        }
      );
    } else {
      // User has not liked the post, so like it
      await postModel.updateOne(
        { _id: data.postId },
        {
          $inc: { likes: 1 },
          $addToSet: {
            likedBy: {
              userId: data.userId,
              likedByUsername: data.likedUsername,
              likedPostImage: data.fileUrl,
            },
          },
        }
      );

      const user = await userModel.findOne({ _id: data.postuserId });
      const likedUser = await userModel.findOne({ _id: data.userId });
      if (user) {
        console.log("like ithan : ",user);
        socket.to(user.userSocketId).emit("Likenotification", likedUser.name, (error) => {
          if (error) {
            console.error("Error emitting Likenotification event:", error);
          } else {
            console.log("Likenotification event emitted successfully");
          }
        });
      }
    }

    const updatedPost = await postModel.findOne({ _id: data.postId });
    io.emit("postLiked", updatedPost);
  } catch (error) {
    socket.emit('error',`${error.message}`);
  }
});

    socket.on("InitalpostComments", async (data) => {
      try {

        const PostuserId=data.userId;
        
        const retriveComments = await commentModel.aggregate([
          {
            $match: {
              PostId: data.postId,
            }
          },
          {
            $sort: {
              createdAt: -1
            }
          },
          {
            $lookup: {
              from: "userdetails",
              let: { userIdObj: { $toObjectId: "$commentedBy" } },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $eq: [ "$_id", "$$userIdObj" ]
                    }
                  }
                },
                {
                  $project: {
                    profilePhoto: 1,
                    userName: 1,
                    _id: 0
                  }
                }
              ],
              as: "userDetails"
            }
          }
        ]);
console.log("ithan :",retriveComments);
        io.emit("InitalpostCommentsRetrived", retriveComments);
      } catch (error) {
        socket.emit('error',`${error.message}`);
      }
    });
    socket.on("newComment", async (data) => {
      try {
        const commentSchema = {
          PostuserId: data.postUserId,
          PostId: data.postId,
          commentedBy: data.userId,
          comment: data.comment,
          username: data.username,
          postImage: data.fileUrl,
        };
        const postComment = await commentModel.create(commentSchema);

        const retriveComments = await commentModel.aggregate([
          {
            $match: {
              PostId: data.postId,
            }
          },
          {
            $sort: {
              createdAt: -1
            }
          },
          {
            $lookup: {
              from: "userdetails",
              let: { userIdObj: { $toObjectId: "$commentedBy" } },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $eq: [ "$_id", "$$userIdObj" ]
                    }
                  }
                },
                {
                  $project: {
                    profilePhoto: 1,
                    userName: 1,
                    _id: 0
                  }
                }
              ],
              as: "userDetails"
            }
          }
        ]);
        console.log(retriveComments);
        const user=await userModel.findOne({_id:data.postUserId})
        if(user){
          const lastCommentedUser=retriveComments[0]
          console.log("last comment: ",retriveComments);
          // const lastCommentedUser=retriveComments[0]
          socket.to(user.userSocketId).emit('notification',lastCommentedUser.username);
        }
        io.emit("commentsRetrived", retriveComments); 
      } catch (error) {
        socket.emit('error',`${error.message}`);

      }
    });
    socket.on("savePost", async (data) => {
      try {

        const post = await postModel.findOne({ _id: data.postId });
        console.log(data.userId);
        if (post.savedBy.includes(data.userId)) {
          // user alredy Saved the post
          console.log("unsaved");
          await postModel.findOneAndUpdate(
            { _id: data.postId },
            { $pull: { savedBy: data.userId } }
          );
        } else {
          console.log("saved");
          // User has not yet saved so, saves the post
          await postModel.updateOne(
            { _id: data.postId },
            { $push: { savedBy: data.userId } }
          );
        }
        const retriveSavedPost = await postModel.findOne({
          _id: data.postId,
        });
        io.emit("retrivedSavedPosts", retriveSavedPost);
        console.log(retriveSavedPost);
      } catch (error) {
        socket.emit('error',`${error.message}`);
      }
    });

  });
};
