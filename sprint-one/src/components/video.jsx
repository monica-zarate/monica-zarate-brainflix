import React from "react";
import "./styles/main.css";

function Video(props) {
  return (
    <div className="video">
      <video
        className="video__playing"
        width="100%"
        height="100%"
        controls
        poster="../video/video-list-0.jpg"
      >
        <source src="../video/brainstation-sample-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Video;
