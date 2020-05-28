import React from "react";
import "./styles/main.css";
import Video from "./Video";
import Comments from "./Comments";
import Queue from "./Queue";
import Description from "./Video-description";
import Axios from "axios";

// const apiKey = "94d45313-a526-444a-ae41-67acf941a5e8";

const videosApi = "http://localhost:5000/videos/";

class Main extends React.Component {
  // Set blank state.
  state = {
    currentVideo: {
      comments: [],
    },
    queue: [],
  };

  // Calling API to retrieve data for Main Video and Video Queue then assigning data to State.
  getVideo(videoId) {
    Axios.get(`${videosApi}${videoId}`)
      .then((response) => {
        this.setState({ currentVideo: response.data });
      })

      .catch((error) => console.log(error));
  }

  getQueue() {
    Axios.get(videosApi)
      .then((response) => {
        console.log(response);
        this.setState({ queue: response.data });
        console.log(this.state.queue);
      })
      .catch((error) => console.log(error));
  }

  // Calling the getQueue and getVideo Functions once the component Main gets mounted. Set the default video to index 0 of the Data Array.
  componentDidMount() {
    console.log("component mounted");
    this.getQueue();
    this.getVideo("1af0jruup5gu");
  }

  // If Else Function that prevents infinite calls to the API by comparing the previous Id with the new Id, if it's the same there won't be another API call.
  componentDidUpdate(prevProps) {
    const oldVideoId = prevProps.match.params.id;
    const newVideoId = this.props.match.params.id;
    if (newVideoId === oldVideoId) {
      console.log("same video Id");
    } else {
      console.log("getting new video");
      this.getVideo(newVideoId);
    }
  }

  // Added the filter Function to the Queue Component to prevent the Main Video to be displayed on the Video Queue.
  render() {
    return (
      <>
        <main className="main">
          <Video currentVideo={this.state.currentVideo} />
        </main>
        <main className="content">
          <div className="content__wrapper">
            <Description currentVideo={this.state.currentVideo} />
            <Comments comments={this.state.currentVideo.comments} />
          </div>
          <Queue
            queue={this.state.queue.filter(
              (video) => video.id !== this.state.currentVideo.id
            )}
          />
        </main>
      </>
    );
  }
}

export default Main;
