const db = require("../models/index");
const Message = db.message;
const User = db.user;
const Chat = db.chatRoom;
const Group = db.group;

module.exports = (io) => {
  io.on("connection", (socket) => {
    console.log("user connected!");

    socket.on("joinChat", async (data) => {
      try {
        socket.join(data.room);
        console.log("joined the room : " + data.room);
        socket.broadcast
          .to(data.room)
          .emit("userJoined", { info: "is Online" }, () => {
            console.log("user online sent");
          });
      } catch (error) {
        socket.emit('error',`${error.message}`);
      }
    });
    socket.on("message", async (data) => {
      try {
        const messageSchema = {
          senderUserId: data.senderUserId,
          receiverUserId: data.receiverUserId,
          message: data.message,
          room: data.room,
        };
        const newMessage = await Message.create(messageSchema);
        const retriveAllMessage = await Message.find({
          room: data.room,
        });
        console.log(retriveAllMessage);
        io.in(data.room).emit("newMessage", retriveAllMessage);
      } catch (error) {
        socket.emit('error',`${error.message}`);
      }
    });
    socket.on("initalMessages", async (data) => {
      try {
        const retriveInitalMessages = await Message.find({ room: data.room });
        socket.broadcast
          .to(data.room)
          .emit("fetchOldMessages", retriveInitalMessages);
          console.log(retriveInitalMessages);
      } catch (error) {
        console.log(error);
      }
    });
    socket.on("createGroup", async (data) => {
      try {
        console.log("vantan");
        const groupSchema = {
          createdBy: data.createdBy,
          groupName: data.groupName,
          members: data.members,
          sender: data.sender,
          message: data.message,
          admin:data.admin
        };
        const createGroup = await Group.create(groupSchema);
        const group = await Group.find({ groupName: data.groupName });
        
        io.emit("newgroup", group, () => {
          console.log("group Emitted");
        });
      } catch (error) {
        console.log(error);
      }
    });
    socket.on("chatRoom", async (data) => {
      try {
        console.log("chatroom :", data);
        const members = [data.senderuserId, data.reciveruserId];
        console.log(members);
        const chatRoom = await Chat.findOne({
          members: { $all: [data.senderuserId, data.reciveruserId] },
        });
        if (chatRoom) {
          io.emit("RetrivedChatRoom", chatRoom);
        } else {
          const createNewChatRoom = await Chat.create({ members: members });
          io.emit("RetrivedChatRoom", createNewChatRoom);
        }
      } catch (error) {
        socket.emit('error',`${error.message}`);
      }
    });
    socket.on("getGroupChatRoom", async (data) => {
      try {
        const groupChat = await Group.findOne({ groupName: data });

        const memberIds = groupChat.members;
        const users = await User.find({ _id: { $in: memberIds } });
        
        const userMap = {};
        users.forEach((user) => {
          userMap[user._id] = user.userName;
        });
        
        groupChat.message.forEach((message) => {
          message.sender = userMap[message.sender];
        });
        console.log(groupChat);
        if (groupChat) {
          io.emit("fetchedGroupChats", groupChat);
        }
      } catch (error) {
        socket.emit('error',`${error.message}`);
      }
    });
    socket.on("sendGroupMessage", async (data) => {
      try {
        console.log("vantan");
        const groupSchema = {
          sender: data.sender,
          message: data.message,
        };
        const createGroup = await Group.updateOne(
          {groupName:data.groupName},
          { $push: {message:groupSchema}}
          );
          const group = await Group.findOne({ groupName: data.groupName });
          
          const memberIds = data.members;
          const users = await User.find({ _id: { $in: memberIds } });
          
          const userMap = {};
          users.forEach((user) => {
            userMap[user._id] = user.userName;
          });
          
          group.message.forEach((message) => {
            message.sender = userMap[message.sender];
          });
          
          console.log(group);
          
          
          // console.log(data);
        io.emit("newgroupMessages", group, () => {
          console.log("group Emitted");
        });
      } catch (error) {
        socket.emit('error',`${error.message}`);
      }
    });

    socket.on("retriveMembers", async (data) => {
      try {
          const memberIds = data;
          console.log("memberids :",memberIds);
          const users = await User.find({ _id: { $in: memberIds } });
 
        io.emit("retrivedMembers", users, () => {
          console.log("retrivedMembers Emitted");
        });
      } catch (error) {
        socket.emit('error',`${error.message}`);
      }
    });
    socket.on("addMembers", async (data) => {
      try {
        console.log("vantan");
        console.log("Group : ",data);
        const createGroup = await Group.updateOne(
          {groupName:data.groupName},
          { $push: {members:data._id}}
          );
        const group=await Group.findOne({groupName:data.groupName})

        io.emit("membersAdded", group, () => {
          console.log("group Emitted");
        });
      } catch (error) {
        socket.emit('error',`${error.message}`);
      }
    });

  });
};
