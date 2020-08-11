import React, { Component } from "react";

import Thumbnail from "./Thumbnail";
//import ExploreCarousel from "./Carousel";
import NavLogin from "../../header/NavLogin";
import "../../stylesheets/Explore.css";
import Background from "../../assets/images/Explore/background.svg";

export class Explore extends Component {
  render() {
    return (
      <div
        style={{ backgroundImage: `url(${Background})` }}
        className="explore-body"
      >
        <NavLogin />
        {
          //<ExploreCarousel />
        }
        <Thumbnail />
      </div>
    );
  }
}

export default Explore;
