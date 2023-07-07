module.exports = (mongoose) => {
  const storySchema = new mongoose.Schema(
    {
      file: [
        {
          filename: {
            type: String,
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      userId: { type: String },
      username: { type: String },
      viewed: { type: Boolean, default: false },
      viewedBy: { type: Array },
    },
    {
      timestamps: true,
    }
  );
  return mongoose.model("stories", storySchema);
};
