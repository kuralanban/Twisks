module.exports = app => {
    var router = require("express").Router();
    const otpController=require("../controller/otp.controller.js") 
    router.get("/:email", otpController.generateOTP);
    router.post("/", otpController.verifyOTP);
    app.use('/otp', router);
  };