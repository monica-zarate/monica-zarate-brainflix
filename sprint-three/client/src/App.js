import React from "react";
import "./components/styles/main.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { Route, Switch } from "react-router-dom";
import Upload from "./components/Upload";

// App.js has two routes for the Main Component, the "/" path will load the default video data, the "/video:id" will be dynamic according to the selected Video Id.

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/video/:id" component={Main} exact />
          <Route path="/upload" component={Upload} />
        </Switch>
      </div>
    );
  }
}

export default App;
