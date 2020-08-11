import React, { Component } from "react";

import NavLogin from "../../header/NavLogin";
import "../../stylesheets/Explore.css";
import woman from "../../assets/images/Explore/woman.png";

export class Description extends Component {
  render() {
    return (
      <div className="container-fluid">
        <NavLogin />
        <div className="container">
          <div className="img-cover-bg  row">
            <div className="img-container  col-sm">
              <img
                src={woman}
                //style={{ maxWidth: "100px" }}
                alt=""
                className="img-thumbnail"
              />
            </div>
            <div className="container col-sm">
              <div className="book-title">ACe</div>
              <div className="book-status">
                <div className="book-reads">2,000 Reads</div>
                <div className="book-votes">1,400 votes</div>
                <div className="chapters"> 63 Parts</div>
              </div>
              <div className="author-info">
                <div className="author-pic ">
                  <img className="avatar" src={woman} alt="" />
                </div>
                <div className="container">
                  <div className="author-name">Osacr Frank</div>
                  <div className="book-update">
                    Last Updated.2 weeks.Ongoing
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
