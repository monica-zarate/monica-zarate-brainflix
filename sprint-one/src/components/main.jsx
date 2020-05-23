import React from "react";
import "./styles/main.css";
import Video from "./Video";
import Comments from "./Comments";
import Queue from "./Queue";
import Description from "./Video-description";
import Upload from "./Upload";

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
        <Upload />
      </body>
    </>
  );
}

export default Main;
