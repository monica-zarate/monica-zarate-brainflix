const fs = require("fs");

const getQueue = () => {
  const videoData = fs.readFileSync("./model/videos.json");

  const mappedVideoData = JSON.parse(videoData).map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
  });

  return mappedVideoData;
};

module.exports = getQueue;
