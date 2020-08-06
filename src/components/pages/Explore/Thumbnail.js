import React, { Component } from "react";
import { Link } from "react-router-dom";
import amara from "../../assets/images/Explore/amara.png";
import chase from "../../assets/images/Explore/chase.png";
import every from "../../assets/images/Explore/every.png";
import graffiti from "../../assets/images/Explore/graffiti.png";
import little from "../../assets/images/Explore/little.png";
import sound from "../../assets/images/Explore/sound.png";
import space from "../../assets/images/Explore/space.png";
import hypocrite from "../../assets/images/Explore/hypocrite.png";
import three from "../../assets/images/Explore/three.png";
import winter from "../../assets/images/Explore/winter.png";

export class Thumbnail extends Component {
  render() {
    return (
      <div className="main">
        <div className="container item-wrap">
          <p>Top Picks</p>
          <hr />
          <div className="container shelf row">
            <div className="col-sm img-container">
              <Link to="/description">
                {" "}
                <img src={amara} className="img-thumbnail" alt="" />{" "}
              </Link>
            </div>

            <div className="col-sm img-container">
              <img src={sound} className="img-thumbnail" alt="" />
            </div>
            <div className="col-sm img-container">
              <img src={chase} className="img-thumbnail" alt="" />
            </div>
            <div className="col-sm img-container">
              <img src={three} className="img-thumbnail" alt="" />
            </div>
            <div className="col-sm img-container">
              <img src={winter} className="img-thumbnail" alt="" />
            </div>
          </div>
        </div>
        {
          //set 2
        }
        <div className="container item-wrap">
          <p>Top Picks</p>
          <hr />
          <div className="container shelf row">
            <div className="col-sm img-container">
              <img src={hypocrite} className="img-thumbnail" alt="" />
            </div>
            <div className="col-sm img-container">
              <img src={every} className="img-thumbnail" alt="" />
            </div>
            <div className="col-sm img-container">
              <img src={little} className="img-thumbnail" alt="" />
            </div>
            <div className="col-sm img-container">
              <img src={graffiti} className="img-thumbnail" alt="" />
            </div>
            <div className="col-sm img-container">
              <img src={space} className="img-thumbnail" alt="" />
            </div>
          </div>
        </div>
        {
          //set 3
        }
        <div className="container item-wrap">
          <p>Top Picks</p>
          <hr />
          <div className="container shelf row">
            <div className="col-sm img-container">
              <img src={winter} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={amara} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={three} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={every} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={amara} alt="" className="img-thumbnail" />
            </div>
          </div>
        </div>
        {
          //set 4
        }
        <div className="container item-wrap">
          <p>Top Picks</p>
          <hr />
          <div className="container shelf row">
            <div className="col-sm img-container">
              <img src={graffiti} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={sound} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={little} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={amara} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={chase} alt="" className="img-thumbnail" />
            </div>
          </div>
        </div>
        {
          //set 5
        }
        <div className="container item-wrap">
          <p>Top Picks</p>
          <hr />
          <div className="container shelf row">
            <div className="col-sm img-container">
              <img src={hypocrite} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={sound} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={chase} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={three} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={winter} alt="" className="img-thumbnail" />
            </div>
          </div>
        </div>
        {
          //set 6
        }
        <div className="container item-wrap">
          <p>Top Picks</p>
          <hr />
          <div className="container shelf row">
            <div className="col-sm img-container">
              <img src={sound} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={little} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={three} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={winter} alt="" className="img-thumbnail" />
            </div>
            <div className="col-sm img-container">
              <img src={every} alt="" className="img-thumbnail" />
            </div>
          </div>
        </div>
        {
          //sets end
        }
      </div>
    );
  }
}

export default Thumbnail;
