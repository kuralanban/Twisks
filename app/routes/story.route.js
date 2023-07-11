module.exports= (app)=>{
  const multer = require ("multer");
  const { google } = require('googleapis');
  const CLIENT_ID = "20294953218-3pvfpdapvflrqs3andlbkok0ei8u97no.apps.googleusercontent.com";
  const CLIENT_SECRET = "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";
  const REDIRECT_URI = "https://developers.google.com/oauthplayground";
  const REFRESH_TOKEN = "1//04HOdok0L_WfXCgYIARAAGAQSNwF-L9IrYAlOVpwKVTyyDWOeHng2oevjSme7BFMBsDQ8mKpaVrHPGrNpn1q7p1ot-xFieJfWPd4";
  const fs = require('fs');
  const { mongoose } = require("mongoose");
  const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
  oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  const drive = google.drive({
    version: 'v3',
    auth: oauth2Client
  });
  
  const storage = multer.diskStorage({
  
    filename: function (req, file, cb) {
      cb(null, `${new mongoose.Types.ObjectId()}_${file.originalname}`);
    },
  });
  
  async function uploadFile(file) {
    try {
      const response = await drive.files.create({
        requestBody: {
          name: file.filename,
          mimeType: 'image/jpg'
        },
        media: {
          mimeType: 'image/jpg',
          body: fs.createReadStream(file.path),
        }
      });
  
      const fileId = response.data.id;
      return fileId;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }
  
const { authenticateUser } = require("../middleware/authorize.middleware");

const upload= multer ({storage});

module.exports= upload;
const storyController= require("../controller/story.controller")
const router= require('express').Router();

router.post("/createStory",authenticateUser, upload.single("file"),
async (req, res, next) => {
  const fileId = await uploadFile(req.file);
  req.fileId = fileId; // Store the file ID in the request object
  next();
}
,storyController.saveStoryDetails);

router.get("/viewStory/:userId",authenticateUser, storyController.fetchFollowingStory);

app.use('/story', router)
}




























// const storyController = require("../controller/story.controller");
// const router = require("express").Router();

// module.exports = (app) => {


// const multer = require("multer");

// const storage= multer.diskStorage({
//   destination: function (req, file, cb ){
//     cb(null, "./public/upload/story");
//   },
//   filename: function(req, file, cb){
//     cb(null, file.originalname);
//   }
// });
// const upload= multer({ storage });

// module.exports= upload;

// router.post('/createStory', upload.single('file'), storyController.storyController);
// router.get('/fetchStory ', )

// app.use('/story', router)


// };

// //
