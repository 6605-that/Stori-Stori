import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Explore from "./components/pages/Explore/Explore";
import Library from "./components/pages/Library";
import SignUp from "./components/pages/Register/SignUp";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import Description from "./components/pages/BookDescription/Description";
import State from "./components/pages/Write/State";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";

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
          <Route path="/write" component={State} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
