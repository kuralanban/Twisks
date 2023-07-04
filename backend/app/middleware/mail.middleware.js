const nodemailer = require("nodemailer");
module.exports = {
  blockedMailMiddleware: async (userDetails) => {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "twisks@outlook.com",
        pass: "Aspire@india123",
      },
    });
    const mailOptions = {
      from: "twisks@outlook.com",
      to: userDetails.email,
      subject: "Account blocked",
      html: "<h2>Dear user,</h2><p>We have detected suspicious activity on your account and have temporarily locked for 7 days for a security precaution.</p><h4>Retry after 7 days or contact admin.</h4><h4>Thanks,</h4>",
    };
    transporter.sendMail(mailOptions, async (error, info) => {
      if (error) {
        return "Failed to send mail";
      } else {
        console.log("Email sent: " + info.response);
        return "mail sent successfully";
      }
    });
  },
  unblockedMailMiddleware: async (userDetails) => {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "twisks@outlook.com",
        pass: "Aspire@india123",
      },
    });
    const mailOptionsUnblock = {
      from: "twisks@outlook.com",
      to: userDetails.email,
      subject: "Account unblocked",
      html: "<h2>Dear user,</h2><p>Thanks for the wait your account has been successfully unblocked by the admin.</p><h4>You can continue using of Twisks.</h4><h4>Thanks,</h4>",
    };

    transporter.sendMail(mailOptionsUnblock, async (error, info) => {
      if (error) {
        return "Failed to send mail";
      } else {
        console.log("Email sent: " + info.response);
        return "mail sent successfully";
      }
    });
  },
};
