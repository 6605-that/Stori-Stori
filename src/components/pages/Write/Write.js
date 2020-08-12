import React, { Component } from "react";
import NavLogin from "../../header/NavLogin";

export class Write extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    //const { values, handleChange } = this.props;
    return (
      <div>
        <NavLogin />
        <div className="container">
          <h1>write</h1>
          <button
            type="submit"
            className="btn btn-light btn-lg "
            onClick={this.back}
          >
            BACK
          </button>
          <button
            type="submit"
            className="btn btn-primary btn-lg "
            onClick={this.continue}
          >
            SAVE & UPLOAD
          </button>
        </div>
      </div>
    );
  }
}

export default Write;
