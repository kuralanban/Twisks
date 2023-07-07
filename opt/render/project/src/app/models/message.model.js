module.exports = (mongoose) => {
    const messageSchema = new mongoose.Schema(
      {
        senderUserId: { type: String },
        receiverUserId: { type: String },
        message: { type: String },
        room:{type:String}
      },
      { timestamps: true }
    );
  
    return mongoose.model("messageDetails", messageSchema);
  };
