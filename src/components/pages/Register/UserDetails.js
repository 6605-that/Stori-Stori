import React, { Component } from "react";
import Nav from "./Nav";
import signup1 from "../../assets/images/signup1.png";
import facebook from "../../assets/icons/logos_facebook.png";
import google from "../../assets/icons/flat-color-icons_google.png";
import twitter from "../../assets/icons/logos_twitter.png";
import "../../stylesheets/SignUp.css";

export class UserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="container-fluid wrapper">
        <Nav />
        <div className=" row main-page">
          <div className="col-sm image-wrapper">
            <picture className="container">
              <img className="img-responsive" src={signup1} alt="" />
              {
                //sizes="(min-width: 50rem) 50vw
              }
            </picture>
          </div>
          <div className="col-sm form-wrapper">
            <h1>Hi There</h1>
            <p>Sign up to get started</p>
            <a href="facebook.com">
              <img src={facebook} alt="" />
            </a>
            <a href="google.com">
              <img src={google} alt="" />
            </a>
            <a href="twitter.com">
              <img src={twitter} alt="" />
            </a>
            <p>Or use your email to sign up</p>
            {
              //form
            }
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={handleChange("userName")}
                  defaultValue={values.userName}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  onChange={handleChange("email")}
                  defaultValue={values.email}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="pwd"
                  onChange={handleChange("password")}
                  defaultValue={values.password}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.continue}
              >
                SIGN UP
              </button>
              <p>
                By continuing you agree to our{" "}
                <a href="terms.com">Terms and Conditions {""}</a>
                and <a href="privacy.com">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserDetails;
