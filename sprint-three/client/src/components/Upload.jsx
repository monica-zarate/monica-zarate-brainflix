import React from "react";
import "./styles/main.css";
import thumbnail from "../assets/images/upload-video-preview.jpg";
import Axios from "axios";

function Upload(props) {
  let clickHandler = (event) => {
    const videosApi = "http://localhost:5000/videos/";
    let titleInput = document.getElementsByClassName("upload__form--input")[0];
    let title = titleInput.value;
    let descriptionInput = document.getElementsByClassName(
      "upload__form--text"
    )[0];
    let description = descriptionInput.value;
    let newVideo = {
      title: title,
      description: description,
    };
    Axios.post(videosApi, newVideo)
      .then((response) => {
        console.log(response.data);
        titleInput.value = "";
        descriptionInput.value = "";
      })
      .catch((error) => {
        console.log("Error");
      });
  };

  return (
    <div className="upload">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__wrapper">
        <div className="upload__thumb">
          <p className="upload__thumb--title">VIDEO THUMBNAIL</p>
          <img className="upload__thumb--img" src={thumbnail} alt="bike" />
        </div>

        <div className="upload__form">
          <p className="upload__form--title">TITLE YOUR VIDEO</p>
          <input
            className="upload__form--input"
            type="text"
            placeholder="Add a title to your video"
          />
          <p className="upload__form--title">ADD A DESCRIPTION</p>
          <textarea
            className="upload__form--text"
            placeholder="Add a description of your video"
          ></textarea>
        </div>
      </div>
      <div className="upload__btns">
        <p className="upload__btns--cancel">CANCEL</p>
        <button onClick={clickHandler} className="upload__btns--publish">
          PUBLISH
        </button>
      </div>
    </div>
  );
}

export default Upload;
