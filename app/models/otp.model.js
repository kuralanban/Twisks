module.exports = (mongoose) => {
    const Otp = mongoose.model(
      "otp",
      mongoose.Schema({
        userId:{
            type:String
        },
        otpNumber:{
            type:Number,
            required:true
        }
      })
    );
    return Otp;
  };
  