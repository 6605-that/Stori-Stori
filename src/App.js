import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Explore from "./components/pages/Explore/Explore";
import Library from "./components/pages/Library";
import SignUp from "./components/pages/Register/SignUp";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Description from "./components/pages/BookDescription/Description";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/explore" component={Explore} />
          <Route path="/library" component={Library} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/description" component={Description} />
        </div>
      </Router>
    );
  }
}

export default App;
