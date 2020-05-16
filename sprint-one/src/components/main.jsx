import React from "react";
import "./styles/main.css";
import Video from "./video";
import Comments from "./comments";

function Main(props) {
  return (
    <main className="main">
      <Video currentVideo={props.currentVideo} />
      <Comments />
    </main>
  );
}

export default Main;
