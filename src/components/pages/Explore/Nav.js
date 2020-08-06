import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/logoSignup.png";
//import "../../stylesheets/SignUp.css";

export class Nav extends Component {
  render() {
    return (
      <div className="container-fluid">
        <header className="sign-up-nav">
          <nav className="navbar navbar-expand-sm ">
            <Link to="/">
              <img src={Logo} alt="" className="navbar-brand" />
            </Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Nav;
