import React, { Component } from "react";
import Nav from "../Explore/Nav";
import dummy from "../../assets/images/Explore/space.png";

export class Description extends Component {
  render() {
    return (
      <div className="container">
        <Nav />
        <div className="img-cover-bg container row">
          <div className="img-wrap  col-sm">
            <img src={dummy} alt="" className="img-thumbnail" />
          </div>
          <div className="container col-sm">
            <div className="book-title">ACe</div>
            <div className="book-status">
              <div className="book-reads">2,000 Reads</div>
              <div className="book-votes">1,400 votes</div>
              <div className="chapters"> 63 Parts</div>
            </div>
            <div className="author-info">
              <div className="author-pic img-circle">
                <img src={dummy} alt="" />
              </div>
              <div className="container">
                <div className="author-name">Osacr Frank</div>
                <div className="book-update">Last Updated.2 weeks.Ongoing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
