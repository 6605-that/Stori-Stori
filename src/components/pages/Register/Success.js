import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import Signup2 from "../../assets/images/signup2.png";
import "../../stylesheets/SignUp.css";

export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    //process form//
    this.props.nextStep();
  };
  render() {
    return (
      <div className="container-fluid wrapper2">
        <Nav />
        <div className="form-wrapper2 container mt-5 text-center">
          <picture>
            <img src={Signup2} alt="" className="img-fluid" />
          </picture>
          <div className="success-message">
            <h1>Well Done!</h1>
            <p>Sign Up Complete</p>
          </div>
          <Link to="/explore">
            <div className="btn btn-outline-dark">Start Reading</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Success;
