import React from "react";
import "./styles/main.css";
import Video from "./video";
import Comments from "./comments";
import Queue from "./queue";
import Description from "./video-description";

function Main(props) {
  return (
    <>
      <main className="main">
        <Video currentVideo={props.currentVideo} />
      </main>
      <body className="content">
        <div className="content__wrapper">
          <Description currentVideo={props.currentVideo} />
          <Comments comments={props.comments} />
        </div>
        <Queue queue={props.queue} />
      </body>
    </>
  );
}

export default Main;
