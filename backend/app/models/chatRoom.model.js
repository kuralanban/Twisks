module.exports = (mongoose) => {
    const chatRoomSchema = new mongoose.Schema(
      {
        members: { type: Array }
      },
      { timestamps: true }
    );
  
    return mongoose.model("chatRoom", chatRoomSchema);
  };