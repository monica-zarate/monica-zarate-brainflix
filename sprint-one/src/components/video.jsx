import React from "react";
import "./styles/main.css";

function Video(props) {
  return (
    <>
      <div className="video">
        <div className="video__active">
          <video className="video__playing"></video>
          <div className="video__icons">
            <button className="video__icons--play"></button>
            <button className="video__icons--time">
              <span className="video__icons--timer">
                {props.currentVideo.duration}
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
