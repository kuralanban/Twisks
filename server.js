const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const { unblockUsersMiddleware } = require("./app/middleware/auth.middleware");

// packages for web-Socket
const http = require("http");
const socketIO = require("socket.io");
const server = http.createServer(app);

require("./app/config/db.config");
require("dotenv").config();

var corsOptions = { origin: "*" };

app.use(cors());

app.use("/profilePic", express.static("./public/upload/userProfile"));
app.use("/uploads", express.static("./public/upload/userPosts"));
app.use("/story", express.static("./public/upload/story"));
app.use("/profile", express.static("./public/upload/profile"));

app.use(bodyParser.json());
app.use(express.static('frontend'))
app.use(unblockUsersMiddleware);

// Routes !
require("./app/routes/user.route")(app);
require("./app/routes/post.route")(app);
require("./app/routes/count.route")(app);
require("./app/routes/individualPost.route")(app);
require("./app/routes/moreLikes.route")(app);
require("./app/routes/allUser.route")(app);
require("./app/routes/searchFilter.route")(app);
require("./app/routes/explore.route")(app);
require("./app/routes//notification.route")(app);
require("./app/routes/message.route")(app);
require("./app/routes/otp.route")(app);
require("./app/routes/reported.route")(app);
require("./app/routes/story.route")(app);
require("./app/routes/userFollow.routes")(app);

// Handle WebSocket connections
const io = socketIO(server, {
  cors: corsOptions, // Pass the corsOptions to the socketIO server
});

require("./app/service/socket.service")(io);
require("./app/service/messageSocket.service")(io);

server.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

module.exports=app
