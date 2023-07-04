module.exports = (mongoose) => {
  const commentSchema = new mongoose.Schema(
    {
      PostuserId: { type: String },
      PostId: { type: String },
      commentedBy: { type: String },
      comment: { type: String },
      username:{ type: String },
      postImage:{type:String}
    },
    { timestamps: true }
  );

  return mongoose.model("commentDetails", commentSchema);
};
