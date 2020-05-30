const fs = require("fs");

const getVideos = () => {
  const videoData = JSON.parse(fs.readFileSync("./model/videos.json"));

  return videoData;
};

module.exports = getVideos;
