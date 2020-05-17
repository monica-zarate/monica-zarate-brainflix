import React from "react";
import "./components/styles/main.css";
import Header from "./components/header";
import Main from "./components/main";

class App extends React.Component {
  state = {
    currentVideo: {
      id: 1,
      title: "BMX Rampage: 2018 Highlights",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      channel: "By Red Cow",
      image: "",
      views: "1,001,023",
      likes: "110,985",
      duration: "0:00 / 0:42",
      video: "",
      timestamp: "12/18/2018",
      comments: "",
    },
    comments: [
      {
        author: "Micheal Lyons",
        timestamp: "12/18/2018",
        content:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
      },
      {
        author: "Gary Wong",
        timestamp: "12/12/2018",
        content:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
      },
      {
        author: "Theodore Duncan",
        timestamp: "11/15/2018",
        content:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favorite ever!",
      },
    ],
    queue: [
      {
        id: 1,
        title: "Become A Travel Pro In One Easy Lesson",
        channel: "Todd Welch",
        image: "/queue-imgs/video-list-1.jpg",
      },
      {
        id: 2,
        title: "Les Houches The Hidden Gem Of The Chamonix",
        channel: "Cornelia Blair",
        image: "/queue-imgs/video-list-2.jpg",
      },
      {
        id: 3,
        title: "Travel Health Useful Medical Information For",
        channel: "Glen Harper",
        image: "/queue-imgs/video-list-3.jpg",
      },
      {
        id: 4,
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: "/queue-imgs/video-list-4.jpg",
      },
      {
        id: 5,
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: "/queue-imgs/video-list-5.jpg",
      },
      {
        id: 6,
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        image: "/queue-imgs/video-list-6.jpg",
      },
      {
        id: 7,
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: "/queue-imgs/video-list-7.jpg",
      },
      {
        id: 8,
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: "/queue-imgs/video-list-8.jpg",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main
          currentVideo={this.state.currentVideo}
          comments={this.state.comments}
          queue={this.state.queue}
        />
      </div>
    );
  }
}

export default App;
