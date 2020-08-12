import React, { Component } from "react";
import Nav from "../pages/Register/Nav";
import signup1 from "../assets/images/signup1.png";
import facebook from "../assets/icons/logos_facebook.png";
import google from "../assets/icons/flat-color-icons_google.png";
import twitter from "../assets/icons/logos_twitter.png";
import "../stylesheets/SignUp.css";

export class UserDetails extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };


  render() {
    // const { values, handleChange } = this.props;
    return (
      <div className="container-fluid wrapper">
        <Nav />
        <div className="container mt-5">
          <div className=" row justify-content-md-center main-page">
            <div className="col-sm image-wrapper">
              <picture className="container">
                <img className="img-fluid" src={signup1} alt="" />
              </picture>
            </div>
            <div className="col-sm form-wrapper">
              <h1>Welcome</h1>
              <p>Sign in to continue</p>
              <a href="facebook.com">
                <img src={facebook} alt="" id="space" />
              </a>
              <a href="google.com">
                <img src={google} alt="" id="space" />
              </a>
              <a href="twitter.com">
                <img src={twitter} alt="" id="space" />
              </a>
              <p>Or use your email to sign up</p>
              {
                //form
              }
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                    onChange={this.handleChange}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  SIGN IN
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
      </div>

    );
  }
}

export default UserDetails;
