import React, { Component } from "react";
import Navbar from "../header/Navbar";
import { Link } from "react-router-dom";
import Background from "../assets/images/Explore/background.svg";
import home from "../assets/images/home.svg";
import "../stylesheets/Home.css";
export class Home extends Component {
  render() {
    return (
      <div className="home" style={{ backgroundImage: `url(${Background})` }}>
        <Navbar />
        <div className="container main">
          <div className="img-box">
            <img src={home} alt="" className="img-fluid float-right " />
          </div>
          <div className="text-box">
            <div>
              <h1>African Stories</h1>
            </div>
            <div>
              <h3>Lorem ipsum dolor sit</h3>
            </div>
            <div>
              <p>
                Studying how CBD awareness and
                <br />
                availability as it related to pain management <br />
                alternatives.
              </p>
            </div>
            <Link to="/signup">
              <div className="btn btn-outline-dark">SIGN IN</div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
