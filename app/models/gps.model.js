module.exports = (mongoose) => {
    const gpsSchema = new mongoose.Schema(
      {
        position:{type:Object}
      },
      { timestamps: true }
    );
  
    return mongoose.model("gpsDetails", gpsSchema);
  };
  