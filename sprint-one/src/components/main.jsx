import React from "react";
import "./styles/main.css";
import Video from "./video";

function Main(props) {
  return (
    <main className="main">
      <Video currentVideo={props.currentVideo} />
    </main>
  );
}

export default Main;
