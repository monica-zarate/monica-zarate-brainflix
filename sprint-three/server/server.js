// Including Express and CORS after installing them
const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// Importing getVideo and getQueue controllers
const getVideo = require("./controller/getVideo");
const getQueue = require("./controller/getQueue");
const getVideos = require("./controller/getVideos");

// Const App to use express method
const app = express();

app.use(express.json());
app.use(cors());

// Get Video Queue
app
  .route("/videos")
  .get((req, res) => {
    res.json(getQueue());
  })
  .post((req, res) => {
    const videosArr = getVideos();
    const videoObj = {
      id: uuidv4(),
      title: req.body.title,
      channel: "Red Cow",
      image: "https://i.imgur.com/l2Xfgpl.jpg",
      description: req.body.description,
      views: "1,001,023",
      likes: "110,985",
      duration: "4:01",
      video:
        "https://ia800701.us.archive.org/26/items/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      timestamp: new Date(),
      comments: [],
    };
    videosArr.push(videoObj);
    fs.writeFileSync("./model/videos.json", JSON.stringify(videosArr));
    res.json(videosArr);
  })
  .put((req, res) => {
    res.send("Video uploaded");
  });

// Get Main Video

app.get("/videos/:id", (req, res) => {
  const videoId = req.params.id;
  res.json(getVideo(videoId));
});

// Page not found for invalid paths
app.get("/*", (req, res) => {
  res.send(`<h1>Page not found</h1>`);
});

// App listening on local host
app.listen(5000, console.log("app is listening at: http://localhost:5000"));
