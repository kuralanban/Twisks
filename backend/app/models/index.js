const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require("./user.model")(mongoose);
db.post=require("./post.model")(mongoose);
db.otp=require("./otp.model")(mongoose);
db.comment=require("./comment.model")(mongoose);
db.message=require('./message.model')(mongoose);
db.chatRoom=require('./chatRoom.model')(mongoose);
db.story= require("./story.model")(mongoose);
db.group= require("./group.model")(mongoose);
module.exports = db;
