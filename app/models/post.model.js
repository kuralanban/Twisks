module.exports = (mongoose) => {
    const postSchema = new mongoose.Schema(
      {
        userId: { type: Object },
        caption: { type: String },
        fileName: { type: String },
        likes: { type: Number, default: 0 },
        fileUrl:{type:String},
        reports:[{
          reportedUserId:{
            type:mongoose.Schema.Types.ObjectId,
          },
          reportType:{
            type:String
          },
          createdAt:{
            type:Date,
            default:Date.now
          }
        }],
        blocked:{
          type:Boolean,
          default:false
        },
        blockedAt:{
          type:Date
        },
        likedBy: [{
          userId: {type: String},
          likedByUsername:{type: String},
          likedPostImage:{type: String},
          timestamp: { type: Date, default: Date.now }
          }],
        savedBy:[{type:String}]
      },
      { timestamps: true }
    );

    postSchema.pre('save', function (next) {
      if (this.likes < 0) {
        this.likes = 0;
      }
      next();
    });

    return mongoose.model('postDetails', postSchema);
  };
