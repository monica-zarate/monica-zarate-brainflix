import React from "react";
import "./styles/main.css";
import video_preview from "../assets/images/video-list-0.jpg";

function Video() {
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
        <h1 className="description__title">BMX Rampage: 2018 Highlights</h1>
        <p className="description__author">By Red Cow</p>
        <p className="description__date">12/18/2018</p>
        <img className="description__views-icon" src="" alt="" />
        <span className="description__views-num">1,001,023</span>
        <img className="description__likes-icon" src="" alt="" />
        <span className="description__likes-num">110,985</span>
      </div>
      <div className="description__text-wrapper">
        <p className="description__text-content">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </p>
      </div>
    </>
  );
}

export default Video;
