const db = require("../models");
const User = db.user;
require("dotenv").config();
const jwt = require("jsonwebtoken");
const userService = require("../service/user.service");
const bcrypt = require("bcryptjs");
exports.newUser = async (req, res, next) => {
  try {
    const user = new User({
      userName: req.body.userName,
      name: req.body.userName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      accountType: "public",
      profilePhoto:
        "https://drive.google.com/uc?id=1WCE4nacbnegEaJbnMmPf3gBXxipVhZHo",
    });
    user
      .save(user)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the users.",
        });
      });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the users.",
    });
  }
};

exports.googleUser = (req) => {
  const user = new User({
    userName: req.body.name,
    email: req.body.email,
  });
  user
    .save(user)
    .then(() => {
      console.log("data added to database");
    })
    .catch((err) => {
      return err.message || "Some error occurred while creating the users.";
    });
};
exports.validateUser = async (req, res) => {
  if (req.body.email == "admin@aspiresys.com" && req.body.password=="admin@123") {
      var token = jwt.sign(
        {
          email: req.body.email,
          role: "admin",
        },
        process.env.SECRET_KEY
      );
    return res.status(200).send({
      message: true,
      token: token,
      role: "admin",
    });
  }
  User.findOne({
    email: req.body.email,
  })
    .then(async (user) => {
      if (!user) {
        return res.status(200).send({
          message: false,
        });
      }
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(200).send({
          accessToken: null,
          password: false,
          message: "invalid password",
        });
      }
      if(user.blocked==true){
        return res.status(200).send({
          accessToken: null,
          blocked: true,
          blockedAt:user.blockedAt,
          message: "User had been blocked",
        });
      }
      var token = jwt.sign(
        {
          email: user.email,
          role: "user",
          userDp:user.fileUrl
        },
        process.env.SECRET_KEY
      );
     await userService.userActivityStatus(user._id)

      res.status(200).send({
        message: true,
        token: token,
        userId: user._id,
        userName:user.userName,
        role:'user'
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};
exports.validateGoogleUser = (req, res) => {
  User.findOne({
    email: req.body.email,
  })
    .then(async (user) => {
      if (!user) {
        this.googleUser(req);
      }
      var token = jwt.sign(
        {
          email: req.body.email,
          role: "user",
          userDp:user.profilePhoto
        },
        process.env.SECRET_KEY
      );
      const activity=await userService.userActivityStatus(user._id)
      res.status(200).send({
        message: "Login successfull",
        token: token,
        userName:user.userName,
        userId: user._id,
        role: "user",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err,
      });
    });
};
exports.fetchUserDetails = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userDetails = await userService.fetchUserDetailservice({
      _id: `${userId}`,
    });
    if (userDetails) {
      res.status(200).json({
        status: 1,
        message: "Successfully fetched User Profile Details",
        userDetails: userDetails,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: 0,
      message: error.message,
    });
  }
};
exports.updateUserDetails = (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`,
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User with id=" + id,
      });
    });
};

exports.updateUserPassword = (req, res) => {
  User.findOne({
    email: req.params.email,
  }).then((user) => {
    const password = bcrypt.hashSync(req.body.confirmPassword, 8);
    user.password = password;
    User.findByIdAndUpdate(user._id, user, { useFindAndModify: false })
      .then((data) => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update User with id=${id}. Maybe User was not found!`,
          });
        } else res.send({ message: "User was updated successfully." });
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating User with id=" + id,
        });
      });
  });
};

exports.findUserDetails = (req, res) => {
  User.findOne({
    email: req.params.email,
  })
    .then((user) => {
      if (!user) {
        res.status(200).send({
          message: false,
        });
      } else {
        res.status(200).send({
          message: true,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error in finding User",
      });
    });
};

exports.searchUser = async (req, res) => {
  try {
    const searchUser = await userService.searchUser(req.params.userName);
    res.status(200).json({
      status: 1,
      message: "Success",
      searchedUser: searchUser,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};

exports.addRecentUser = async (req, res) => {
  try {
    const userId = req.body.userId;
    const data = req.body.id;
    const addData = await userService.updateRecentSearchedUser(userId, data);
    return res.status(200).json({
      status: 1,
      message: "added",
      data: addData,
    });
  } catch (err) {
    return res.status(400).json({
      status: 0,
      message: err.message,
    });
  }
};
exports.clearRecentUser = async (req, res) => {
  try {
    const userId = req.body.userId;
    const clearData = await userService.clearRecentSearchedUser(userId);
    return res.status(200).json({
      status: 1,
      message: "cleared",
      data: clearData,
    });
  } catch (err) {
    return res.status(400).json({
      status: 0,
      message: err.message,
    });
  }
};
exports.individualUserDetail = async (req, res) => {
  const userId = req.params.userId;
  try {
    const detailOfUser = await userService.individualUserDetail({
      _id: `${userId}`,
    });
    res.status(200).json({
      status: 1,
      message: "Successfully fetched User Profile Details",
      detailOfUser: [detailOfUser],
    });
  } catch (error) {
    return res.status(400).json({
      status: 0,
      message: error.message,
    });
  }
}
exports.uploadProfileImage = async (req, res) => {
  try {
    const data = req.body;
    data.fileName = req.file.filename;
    const fileId = req.fileId;

    // Construct the Google Drive file URL
    const fileUrl = `https://drive.google.com/uc?id=${fileId}`;
    data.fileUrl = fileUrl;
    const uploadProfile = await userService.uploadProfileImage(data, res);
    return res.status(200).json({
      status: 0,
      message: "Profile photo updated successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: 0,
      message: error.message,
    });
  }
};
exports.logoutUser = async (req, res) => {
  try {
    const userId=req.params.id
    const active=userService.userActivityStatus(userId)
    return res.status(200).json({
      status: 0,
      message: "user logout successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: 0,
      message: error.message,
    });
  }
};

