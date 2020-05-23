import React from "react";
import "./styles/main.css";
import views from "../assets/icons/icon-views.svg";
import likes from "../assets/icons/icon-likes.svg";

function Description(props) {
  let date = props.currentVideo.timestamp;
  let dateObject = new Date(date);
  let formattedDate =
    dateObject.getMonth() +
    1 +
    "/" +
    dateObject.getDate() +
    "/" +
    dateObject.getFullYear();
  return (
    <>
      <div className="description">
        <h1 className="description__title">{props.currentVideo.title}</h1>
        <div className="description__details-wrapper">
          <div className="description__details">
            <p className="description__details--author">
              {props.currentVideo.channel}
            </p>
            <p className="description__details--date">{formattedDate}</p>
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
      </div>
      <div className="description__text-wrapper">
        <p className="description__text-content">
          {props.currentVideo.description}
        </p>
      </div>
    </>
  );
}

export default Description;
