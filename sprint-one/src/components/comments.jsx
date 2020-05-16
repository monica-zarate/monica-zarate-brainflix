import React from "react";
import "./styles/main.css";
import user from "../assets/images/usericon.png";

function Comments(props) {
  return (
    <div className="form">
      <span class="form__comments-num">3 Comments</span>
      <p className="form__title">JOIN THE CONVERSATION</p>
      <div className="form__wrapper">
        <img className="form__wrapper--user-icon" src={user} alt="user-icon" />

        <input
          className="form__wrapper--input"
          type="text"
          placeholder="Add a comment here"
          name=""
          id=""
        />
        <button className="form__wrapper--btn">COMMENT</button>
      </div>
    </div>
  );
}

export default Comments;
