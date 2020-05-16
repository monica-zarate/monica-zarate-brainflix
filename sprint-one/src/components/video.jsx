import React from "react";
import "./styles/main.css";
import play from "../assets/icons/icon-play.svg";
import views from "../assets/icons/icon-views.svg";
import likes from "../assets/icons/icon-likes.svg";

function Video(props) {
  return (
    <>
      <div className="video">
        <div className="video__icons">
          <button className="video__icons--play"></button>
          <button className="video__icons--time"></button>
          <button className="video__icons--screen"></button>
          <button className="video__icons--vol"></button>
        </div>
      </div>
      <div className="description">
        <h1 className="description__title">{props.currentVideo.title}</h1>
        <div className="description__details">
          <p className="description__details--author">
            {props.currentVideo.user}
          </p>
          <p className="description__details--date">
            {props.currentVideo.timestamp}
          </p>
        </div>
        <div className="description__icons">
          <img className="description__icons--views" src={views} alt="" />
          <span className="description__icons--num">
            {props.currentVideo.views}
          </span>
          <img className="description__icons--likes" src={likes} alt="" />
          <span className="description__likes-num">
            {props.currentVideo.likes}
          </span>
        </div>
      </div>
      <div className="description__text-wrapper">
        <p className="description__text-content">
          {props.currentVideo.description}
        </p>
      </div>
    </>
  );
}

export default Video;
