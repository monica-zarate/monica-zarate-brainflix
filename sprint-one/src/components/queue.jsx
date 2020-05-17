import React from "react";
import "./styles/main.css";

function Queue(props) {
  return (
    <aside className="queue">
      <p className="queue__title">NEXT VIDEO</p>
      <ul className="queue__list">
        {props.queue.map((queue) => (
          <li key={queue.id} class="queue__video">
            <img
              className="queue__video--thumb"
              src={queue.image}
              alt="thumb"
            />
            <div className="queue__text">
              <p className="queue__text--title">{queue.title}</p>
              <span className="queue__text--channel">{queue.channel}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Queue;
