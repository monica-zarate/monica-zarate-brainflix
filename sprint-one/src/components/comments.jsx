import React from "react";
import "./styles/main.css";
import user from "../assets/images/usericon.png";
import grey_icon from "../assets/images/usericon-grey.png";

function Comments(props) {
  return (
    <>
      <div className="form">
        <span class="form__comments-num">3 Comments</span>
        <p className="form__title">JOIN THE CONVERSATION</p>
        <div className="form__wrapper">
          <img
            className="form__wrapper--user-icon"
            src={user}
            alt="user-icon"
          />

          <textarea
            className="form__wrapper--input"
            name="input"
            placeholder="Add a comment here"
          ></textarea>

          <button className="form__wrapper--btn">COMMENT</button>
        </div>
      </div>
      <div class="comments">
        <ul class="comments__wrapper">
          {props.comments.map((comments) => (
            <li class="comments__container">
              <img
                class="comments__user-icon"
                src={grey_icon}
                alt="grey circle"
              />
              <div className="comments__content">
                <p class="comments__content--username">{comments.author}</p>
                <p class="comments__content--date">{comments.timestamp}</p>
                <p class="comments__content--text">{comments.content}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Comments;
