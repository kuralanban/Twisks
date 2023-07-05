const otpService = require("../service/otp.service");

exports.generateOTP = async (req, res, next) => {
  try{
    const otp = await otpService.generateotpService(req,res);
    res.status(200).send({
      message: otp,
    })
  }
  catch(err){
    res.status(400).send({
      message:err.message
    })
  }
};  
exports.verifyOTP = async(req, res, next) => {
  try{
    const otp =await otpService.verifyOtpService(req, res);
    res.status(200).send({
      message: otp,
    })
  }
  catch(err){
    res.status(400).send({
      message:err.message
    })
  }
};
