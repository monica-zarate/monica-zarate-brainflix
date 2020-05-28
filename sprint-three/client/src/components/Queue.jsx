import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";

// The Queue Component uses the map Function to retrieve the data from the API and render the Image, Title and Channel for all the videos.
// Every List Item includes a Link for the selected video to be rendered as the Main Video.
function Queue(props) {
  return (
    <aside className="queue">
      <p className="queue__title">NEXT VIDEO</p>
      <ul className="queue__list">
        {props.queue.map((video) => (
          <li key={video.id} className="queue__video">
            <Link to={`/video/${video.id}`} className="queue__video-link">
              <img
                className="queue__video--thumb"
                src={video.image}
                alt="thumb"
              />
              <div className="queue__text">
                <p className="queue__text--title">{video.title}</p>
                <span className="queue__text--channel">{video.channel}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Queue;
