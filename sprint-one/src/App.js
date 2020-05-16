import React from "react";
import "./components/styles/main.css";
// import "./App.css";
import Header from "./components/header";
import Main from "./components/main";

class App extends React.Component {
  state = {
    currentVideo: {
      id: 1,
      title: "BMX Rampage: 2018 Highlights",
      user: "By Red Cow",
      timestamp: "12/18/2018",
      views: "1,001,023",
      likes: "110,985",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
    },
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main currentVideo={this.state.currentVideo} />
      </div>
    );
  }
}

export default App;
