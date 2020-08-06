import React, { Component } from "react";

import Thumbnail from "./Thumbnail";
//import Carousel from "./Carousel";
import Nav from "./Nav";
import "../../stylesheets/Explore.css";
import Background from "../../assets/images/Explore/background.svg";

export class Explore extends Component {
  render() {
    return (
      <div
        style={{ backgroundImage: `url(${Background})` }}
        className="explore-body"
      >
        <Nav />

        <Thumbnail />
      </div>
    );
  }
}

export default Explore;
