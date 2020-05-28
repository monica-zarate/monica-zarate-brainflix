// Including Express and CORS after installing them
const express = require("express");
const cors = require("cors");

// Importing getVideo and getQueue controllers
const getVideo = require("./controller/getVideo");
const getQueue = require("./controller/getQueue");

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
    videoData.push(req.body);
    res.json(videoData);
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
