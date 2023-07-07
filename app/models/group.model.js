module.exports = (mongoose) => {
    const groupSchema = new mongoose.Schema(
      {
        createdBy:{type:String},
        groupName:{type:String,required:true},
        members:{type:Array},
        sender:{type:String},
        message: [{
          sender: {type: String},
          message: {type: String}
        }],
        admin:{type:String}, 
      },
      { timestamps: true }
    );
  
    return mongoose.model("group", groupSchema);
  };
