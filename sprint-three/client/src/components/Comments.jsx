import React from "react";
import "./styles/main.css";
import user from "../assets/images/usericon.png";
import grey_icon from "../assets/images/usericon-grey.png";

// The Comments Component uses the map Function to render the Comments according to the Main Video Id.
function Comments(props) {
  return (
    <>
      <div className="form">
        <span className="form__comments-num">3 Comments</span>
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
      <div className="comments">
        <ul className="comments__wrapper">
          {props.comments.map((comment) => {
            let date = comment.timestamp;
            let dateObject = new Date(date);
            let formattedDate =
              dateObject.getMonth() +
              1 +
              "/" +
              dateObject.getDate() +
              "/" +
              dateObject.getFullYear();
            return (
              <li key={comment.id} className="comments__container">
                <img
                  className="comments__user-icon"
                  src={grey_icon}
                  alt="grey circle"
                />
                <div className="comments__content">
                  <p className="comments__content--username">{comment.name}</p>
                  <p className="comments__content--date">{formattedDate}</p>
                  <p className="comments__content--text">{comment.comment}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Comments;
