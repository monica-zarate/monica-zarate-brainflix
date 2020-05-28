import React from "react";
import "./styles/main.css";

function Video(props) {
  return (
    <>
      <div className="video">
        <div className="video__active">
          <video className="video__playing" poster={props.currentVideo.image}>
            <source src={props.currentVideo.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video__icons">
            <button className="video__icons--play"></button>
            <button className="video__icons--time">
              <span className="video__icons--timer">
                0:00/{props.currentVideo.duration}
              </span>
            </button>
            <button className="video__icons--screen"></button>
            <button className="video__icons--vol"></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
