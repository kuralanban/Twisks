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
// checkGps
const db=require('./app/models/index')
const gps=db.gps;
async function  getUserLocation () {
  if (navigator.geolocation) {
    // Get the user's current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Do something with the latitude and longitude
        // console.log('Latitude:', latitude);
        // console.log('Longitude:', longitude);
        const position={lat:latitude,lng:longitude}
        console.log(position);
        gps.create({position:position})
        // You can call any function here that requires the current location
        // For example, you might want to update a marker on a map or send the location to a server.

      },
      (error) => {
        console.error('Error getting location:', error.message);
      }
    );

    // Call the function every 1 second to get updated location
    setInterval(() => this.getUserLocation(), 50000);

  } else {
    console.error('Geolocation is not supported by this browser.');
  }
}
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
