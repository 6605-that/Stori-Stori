import React, { Component } from "react";
import Nav from "./Nav";
import "../../stylesheets/SignUp.css";

export class UserInterests extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="container-fluid wrapper2">
        <Nav />
        <div className="form-wrapper2 container ">
          <div className="texts">
            <h1>
              Hi {values.userName}
              {""},
            </h1>
            <p>What are your interests?</p>
          </div>
          {
            //interests button set 1
          }
          <div className="interest-btn container row">
            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>

            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>

            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>
          </div>

          {
            //interest button set 2
          }
          <div className="interest-btn container row">
            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>

            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>

            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>
          </div>
          {
            //interest button set 3
          }
          <div className="interest-btn container row">
            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>

            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>

            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>
          </div>
          {
            //interest button set 4
          }
          <div className="interest-btn container row">
            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>

            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>

            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>
          </div>
          {
            //interest button set 5
          }
          <div className="interest-btn container row">
            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>

            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>

            <div
              type="submit"
              className="btn btn-outline-dark col-sm "
              onClick={handleChange("interests")}
            >
              Fantasy
            </div>
          </div>
          <div className="continue">
            <div className="btn " id="btn" onClick={this.continue}>
              Continue
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserInterests;
