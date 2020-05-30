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
      channel: "How to Node",
      image: "https://i.imgur.com/R00X5iK.jpg",
      description: req.body.description,
      views: "1,001,023",
      likes: "110,985",
      duration: "4:01",
      video:
        "https://ia800701.us.archive.org/26/items/SampleVideo1280x7205mb/SampleVideo_1280x720_5mb.mp4",
      timestamp: new Date(),
      comments: [
        {
          name: "Micheal Lyons",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
          id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
          likes: 0,
          timestamp: 1545162149000,
        },
        {
          name: "Gary Wong",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
          likes: 0,
          timestamp: 1544595784046,
        },
        {
          name: "Theodore Duncan",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
          id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
          likes: 0,
          timestamp: 1542262984046,
        },
      ],
    };
    videosArr.push(videoObj);
    fs.writeFileSync("./model/videos.json", JSON.stringify(videosArr));
    res.json(videosArr);
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
