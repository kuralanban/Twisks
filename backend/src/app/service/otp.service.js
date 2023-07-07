const nodemailer = require("nodemailer");
const db = require("../models");
const Otp = db.otp;

function generateValue() {
  value = Math.floor(100000 + Math.random() * 900000);
  return value;
}

let oneTimePassword = generateValue();

exports.verifyOtpService = async (req, res) => {
  try {
    const otp = await Otp.findOne({
      userId: req.body.email,
    });
    if (otp.otpNumber == req.body.otp) {
      await Otp.deleteOne({
        userId: req.body.email,
      });
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return err.message;
  }
};

exports.addOtpDetails = async (req, res) => {
  const otp = new Otp({
    userId: req.params.email,
    otpNumber: oneTimePassword,
  });
  otp
    .save(otp)
    .then(() => {
      console.log("Data added to databse");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the users.",
      });
    });
};
exports.updateOtpDetails = async (req, res) => {
  req.otpNumber = oneTimePassword;
  Otp.findByIdAndUpdate(req._id, req, { useFindAndModify: false })
    .then(() => {
      console.log(`otp updated successfully : ${oneTimePassword}`);
    })
    .catch((err) => {
      return err.message;
    });
};
exports.generateotpService = async (req, res) => {
  oneTimePassword = generateValue();
  Otp.findOne({
    userId: req.params.email,
  }).then(async (otp) => {
    if (!otp) {
      this.addOtpDetails(req, res);
    } else {
      this.updateOtpDetails(otp, res);
    }
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "twisks@outlook.com",
        pass: "Aspire@india123",
      },
    });

    const mailOptions = {
      from: "twisks@outlook.com",
      to: req.params.email,
      subject: "OTP Verification",
      text: `Your OTP: ${oneTimePassword}`,
    };

    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        return "Failed to send Otp";
      } else {
        console.log("Email sent: " + info.response);
        return "OTP sent successfully";
      }
    });
  });
};
