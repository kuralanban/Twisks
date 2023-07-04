module.exports= (app)=>{
  const multer = require ("multer");
  const storage= multer.diskStorage({
    destination: function(req, file, cd){
      cd(null, "./public/upload/story")
    },
    filename: function( req, file, cb){
      cb(null, file.originalname);
    }
  })
  
const { authenticateUser } = require("../middleware/authorize.middleware");

const upload= multer ({storage});

module.exports= upload;
const storyController= require("../controller/story.controller")
const router= require('express').Router();

router.post("/createStory",authenticateUser, upload.single("file"),storyController.saveStoryDetails);

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
